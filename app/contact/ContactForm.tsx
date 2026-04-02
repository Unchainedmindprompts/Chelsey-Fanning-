"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  phone: string;
  intent: "buying" | "selling" | "both" | "";
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    intent: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // TODO: Connect to Resend or Formspree with client's email
      // For now, this is a placeholder that always succeeds in dev
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", intent: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2";
  const inputStyle = {
    borderColor: "rgba(196,185,172,0.5)",
    backgroundColor: "var(--color-white)",
    color: "var(--color-text)",
    fontFamily: "var(--font-inter)",
  };

  if (status === "success") {
    return (
      <div
        className="rounded-2xl p-12 text-center"
        style={{
          backgroundColor: "var(--color-surface)",
          border: "1px solid rgba(196,185,172,0.3)",
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h2 className="text-h3 mb-3" style={{ color: "var(--color-charcoal)" }}>
          Message Sent!
        </h2>
        <p className="text-base" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
          Thanks for reaching out. I&apos;ll be in touch within a few hours — usually sooner.
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl p-8 md:p-10"
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid rgba(196,185,172,0.3)",
      }}
    >
      <h2 className="text-h3 mb-2" style={{ color: "var(--color-charcoal)" }}>
        Send a Message
      </h2>
      <p
        className="text-sm mb-8"
        style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
      >
        I respond same-day. No spam, ever.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-wide mb-2"
              style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
            >
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className={inputClass}
              style={inputStyle}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-wide mb-2"
              style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="(208) 555-0100"
              className={inputClass}
              style={inputStyle}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wide mb-2"
            style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
          >
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@email.com"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        <div>
          <fieldset>
            <legend
              className="block text-xs font-semibold uppercase tracking-wide mb-3"
              style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
            >
              Are you buying or selling?
            </legend>
            <div className="flex flex-wrap gap-3">
              {[
                { value: "buying", label: "Buying" },
                { value: "selling", label: "Selling" },
                { value: "both", label: "Both" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-all border"
                  style={{
                    borderColor: form.intent === opt.value ? "var(--color-primary)" : "rgba(196,185,172,0.5)",
                    backgroundColor: form.intent === opt.value ? "var(--color-primary)" : "var(--color-white)",
                    color: form.intent === opt.value ? "white" : "var(--color-text)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  <input
                    type="radio"
                    name="intent"
                    value={opt.value}
                    checked={form.intent === opt.value}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wide mb-2"
            style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
          >
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me a bit about what you're looking for — or just say hi. No pressure."
            className={inputClass}
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>

        {status === "error" && (
          <p className="text-sm" style={{ color: "#c0392b" }}>
            Something went wrong. Please try again or call me directly.
          </p>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
