import Image from "next/image";
import profile from "@/data/profile";

/**
 * First-paint intro: portrait and a 0→100 counter over a filling bar, then
 * the curtain splits — top half travels up, bottom half down — to reveal
 * the page behind it.
 *
 * Deliberately CSS-only: no "use client", no state, no effect. It ships in
 * the server-rendered HTML so it covers the page from the very first frame
 * (a JS-mounted overlay would flash the content first, then hide it), and it
 * dismisses itself on a CSS animation, so slow hydration or a failed script
 * can never strand a visitor behind a permanent curtain.
 */
export default function Preloader() {
  return (
    <div className="preloader" role="status" aria-label="Loading">
      {/* The two halves that part. They sit behind the content so the
          portrait stays readable until the moment the split begins. */}
      <span className="preloader-panel preloader-panel-top" aria-hidden="true" />
      <span className="preloader-panel preloader-panel-bottom" aria-hidden="true" />

      <div className="preloader-content">
        <span className="preloader-avatar">
          <Image
            src={profile.image.src}
            alt=""
            fill
            sizes="112px"
            priority
            className="rounded-full object-cover"
          />
        </span>

        <p className="preloader-name">{profile.name}</p>

        <div className="preloader-meter">
          <span className="preloader-bar" aria-hidden="true" />
          <span className="preloader-count" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
