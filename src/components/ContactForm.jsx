"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, CircleCheck, CircleAlert, LoaderCircle } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { validateContactForm } from "@/utils/validateContactForm";
import { submitContactForm } from "@/utils/contact";

const INITIAL_VALUES = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    try {
      await submitContactForm(values);
      setStatus("success");
      setValues(INITIAL_VALUES);
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          role="status"
          className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-6 py-14 text-center"
        >
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <CircleCheck className="text-accent" size={32} aria-hidden="true" />
          </motion.span>
          <p className="text-lg font-semibold text-foreground">Message sent</p>
          <p className="max-w-xs text-sm text-muted-foreground">
            Thanks for reaching out — I&apos;ll get back to you as soon as possible.
          </p>
          <Button variant="secondary" onClick={() => setStatus("idle")} className="mt-2">
            Send another message
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          <Input
            id="name"
            name="name"
            label="Name"
            placeholder="Your name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            autoComplete="name"
          />
          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
          />
          <Textarea
            id="message"
            name="message"
            label="Message"
            placeholder="Tell me about your project..."
            value={values.message}
            onChange={handleChange}
            error={errors.message}
          />

          <AnimatePresence>
            {status === "error" ? (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                role="alert"
                className="flex items-center gap-2 text-sm text-red-500"
              >
                <CircleAlert size={16} aria-hidden="true" />
                Something went wrong. Please try again.
              </motion.p>
            ) : null}
          </AnimatePresence>

          <Button
            type="submit"
            icon={status === "submitting" ? undefined : Send}
            disabled={status === "submitting"}
            className="mt-2 self-start disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <LoaderCircle size={16} className="animate-spin" aria-hidden="true" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
