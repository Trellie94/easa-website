"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    console.log("Form submission:", {
      name: data.get("name"),
      email: data.get("email"),
      organisation: data.get("organisation"),
      message: data.get("message"),
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center border border-sand-dark">
        <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-teal"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-charcoal mb-2">
          Thank you for reaching out
        </h3>
        <p className="text-warm-grey">
          We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 sm:p-10 border border-sand-dark space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-charcoal mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-sand-dark px-4 py-3 text-sm text-charcoal placeholder:text-warm-grey-light focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors bg-cream/50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-charcoal mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-sand-dark px-4 py-3 text-sm text-charcoal placeholder:text-warm-grey-light focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors bg-cream/50"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="organisation"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Organisation
        </label>
        <input
          type="text"
          id="organisation"
          name="organisation"
          className="w-full rounded-lg border border-sand-dark px-4 py-3 text-sm text-charcoal placeholder:text-warm-grey-light focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors bg-cream/50"
          placeholder="Your organisation (optional)"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-sand-dark px-4 py-3 text-sm text-charcoal placeholder:text-warm-grey-light focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors bg-cream/50 resize-y"
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-teal px-8 py-3.5 text-base font-semibold text-white hover:bg-teal-dark transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
