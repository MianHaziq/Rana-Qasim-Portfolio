import emailjs from "@emailjs/browser";
import profile from "@/data/profile";

/**
 * Single seam for delivering contact-form submissions.
 *
 * Upgrade path:
 * - Set the NEXT_PUBLIC_EMAILJS_* vars to deliver submissions via EmailJS
 *   with zero backend code (see .env.example).
 * - Otherwise, set NEXT_PUBLIC_FORMSPREE_ID to deliver via Formspree.
 * - For full control, replace the body of this function with a call to a
 *   Route Handler (e.g. src/app/api/contact/route.js) wired to Resend or
 *   Nodemailer. No other file needs to change.
 */
export async function submitContactForm(data) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (serviceId && templateId && publicKey) {
    await emailjs.send(
      serviceId,
      templateId,
      {
        name: data.name,
        email: data.email,
        message: data.message,
        title: `Portfolio inquiry from ${data.name}`,
      },
      { publicKey }
    );

    return { delivered: true };
  }

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  if (formspreeId) {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send message. Please try again.");
    }

    return { delivered: true };
  }

  const subject = encodeURIComponent(`Portfolio inquiry from ${data.name}`);
  const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
  window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;

  return { delivered: false, fallback: "mailto" };
}
