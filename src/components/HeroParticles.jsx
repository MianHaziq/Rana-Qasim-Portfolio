"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight canvas constellation background: slow-drifting dots connected
 * by faint lines when close together, gently pushed away from the cursor.
 * No external assets or particle libraries — just a small RAF loop tuned to
 * stay cheap (O(n^2) distance checks with n capped around 70).
 */
export default function HeroParticles({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let frameId = null;
    const mouse = { x: null, y: null };
    let accentRgb = [99, 102, 241];

    function readAccentColor() {
      const hex = getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim();
      const match = hex.replace("#", "").match(/.{1,2}/g);
      accentRgb = match ? match.map((part) => parseInt(part, 16)) : [99, 102, 241];
    }

    function createParticles() {
      const area = width * height;
      const density = width < 640 ? 13000 : 9500;
      const count = Math.max(20, Math.min(70, Math.round(area / density)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 1,
      }));
    }

    function resize() {
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    }

    function step(shouldMove) {
      ctx.clearRect(0, 0, width, height);
      const [r, g, b] = accentRgb;

      for (const p of particles) {
        if (shouldMove) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x <= 0 || p.x >= width) p.vx *= -1;
          if (p.y <= 0 || p.y >= height) p.vy *= -1;
          p.x = Math.min(Math.max(p.x, 0), width);
          p.y = Math.min(Math.max(p.y, 0), height);

          if (mouse.x !== null) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.hypot(dx, dy) || 1;
            if (dist < 110) {
              const force = ((110 - dist) / 110) * 1.1;
              p.x += (dx / dist) * force;
              p.y += (dy / dist) * force;
            }
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.55)`;
        ctx.fill();
      }

      const maxDist = width < 640 ? 85 : 125;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${(1 - dist / maxDist) * 0.32})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      step(true);
      frameId = requestAnimationFrame(animate);
    }

    // The background layer sits behind interactive content with
    // pointer-events: none (so it never blocks clicks on buttons/links),
    // which means listening on the canvas itself would never fire — the
    // browser won't hit-test an element that opts out of pointer events.
    // Listening on window instead and bounds-checking manually works
    // regardless of what's stacked on top.
    function handleMouseMove(event) {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (x < 0 || x > width || y < 0 || y > height) {
        mouse.x = null;
        mouse.y = null;
      } else {
        mouse.x = x;
        mouse.y = y;
      }
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    readAccentColor();
    resize();
    window.addEventListener("resize", resize);

    const themeObserver = new MutationObserver(() => {
      readAccentColor();
      if (reduceMotion) step(false);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    if (reduceMotion) {
      step(false);
    } else {
      window.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave);
      animate();
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      themeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
