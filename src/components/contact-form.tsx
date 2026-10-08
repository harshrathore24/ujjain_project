"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import {
  contactSchema,
  type ContactFormValues,
  type ContactInput,
} from "@/lib/schemas";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues, unknown, ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  async function onSubmit(values: ContactInput) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold-200/60 bg-white p-8 text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-3 font-display text-xl font-semibold text-ink-900">
          Message sent!
        </h3>
        <p className="mt-1.5 text-sm text-ink-500">
          We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-gold-200/60 bg-white p-6 sm:p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-ink-900">Name</label>
          <input
            {...register("name")}
            className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-brand-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm font-semibold text-ink-900">Phone (optional)</label>
          <input
            {...register("phone")}
            className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-900">Email</label>
        <input
          {...register("email")}
          type="email"
          className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-brand-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-900">Subject (optional)</label>
        <input
          {...register("subject")}
          className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-900">Message</label>
        <textarea
          {...register("message")}
          rows={4}
          className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-brand-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-cream-50 hover:bg-brand-800 transition-colors disabled:opacity-60"
      >
        {isSubmitting ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Send className="size-4" />
        )}
        Send Message
      </button>
    </form>
  );
}
