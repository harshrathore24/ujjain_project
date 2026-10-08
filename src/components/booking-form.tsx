"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  bookingSchema,
  type BookingFormValues,
  type BookingInput,
} from "@/lib/schemas";
import { formatINR } from "@/lib/utils";

type Option = {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
};

export function BookingForm({
  packages,
  hotels,
  cars,
  defaultType,
  defaultItemId,
}: {
  packages: Option[];
  hotels: Option[];
  cars: Option[];
  defaultType: "PACKAGE" | "HOTEL" | "CAR";
  defaultItemId?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues, unknown, BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      type: defaultType,
      itemId: defaultItemId ?? "",
      itemName: "",
      name: "",
      email: "",
      phone: "",
      startDate: "",
      endDate: "",
      guests: 1,
      notes: "",
    },
  });

  const type = watch("type");
  const optionsByType: Record<string, Option[]> = {
    PACKAGE: packages,
    HOTEL: hotels,
    CAR: cars,
  };
  const options = optionsByType[type] ?? [];

  useEffect(() => {
    if (!defaultItemId) return;
    const selected = options.find((o) => o.id === defaultItemId);
    if (selected) setValue("itemName", selected.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(values: BookingInput) {
    setServerError(null);
    const selected = options.find((o) => o.id === values.itemId);
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        itemName: selected?.name ?? values.itemName,
      }),
    });

    if (!res.ok) {
      setServerError("Something went wrong. Please try again or WhatsApp us directly.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold-200/60 bg-white p-8 text-center">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink-900">
          Request received!
        </h3>
        <p className="mt-2 text-ink-500 max-w-md mx-auto">
          Thank you for reaching out. Our team will call or WhatsApp you within
          a few hours to confirm details — no payment is needed right now.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-brand-800 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-gold-200/60 bg-white p-6 sm:p-8 space-y-6"
    >
      <div>
        <label className="text-sm font-semibold text-ink-900">
          What would you like to book?
        </label>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {(["PACKAGE", "HOTEL", "CAR"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setValue("type", t);
                setValue("itemId", "");
                setValue("itemName", "");
              }}
              className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                type === t
                  ? "border-brand-700 bg-brand-50 text-brand-700"
                  : "border-gold-200 text-ink-500 hover:border-gold-400"
              }`}
            >
              {t === "PACKAGE" ? "Tour Package" : t === "HOTEL" ? "Hotel" : "Car Rental"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-900">
          Select {type === "PACKAGE" ? "a package" : type === "HOTEL" ? "a hotel" : "a car"}
        </label>
        <Controller
          control={control}
          name="itemId"
          render={({ field }) => (
            <select
              {...field}
              onChange={(e) => {
                field.onChange(e);
                const selected = options.find((o) => o.id === e.target.value);
                setValue("itemName", selected?.name ?? "", {
                  shouldValidate: true,
                });
              }}
              className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm text-ink-900 focus:border-brand-500 focus:outline-none"
            >
              <option value="">Choose an option…</option>
              {options.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.name} — {formatINR(o.price)} {o.priceLabel}
                </option>
              ))}
            </select>
          )}
        />
        {errors.itemId && (
          <p className="mt-1 text-xs text-brand-600">{errors.itemId.message}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-ink-900">Full Name</label>
          <input
            {...register("name")}
            placeholder="Your full name"
            className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-brand-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm font-semibold text-ink-900">Phone Number</label>
          <input
            {...register("phone")}
            placeholder="+91 98765 43210"
            className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-brand-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-900">Email Address</label>
        <input
          {...register("email")}
          type="email"
          placeholder="you@example.com"
          className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-brand-600">{errors.email.message}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-semibold text-ink-900">
            {type === "PACKAGE" ? "Travel Date" : type === "HOTEL" ? "Check-in" : "Start Date"}
          </label>
          <input
            {...register("startDate")}
            type="date"
            className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
          />
          {errors.startDate && (
            <p className="mt-1 text-xs text-brand-600">{errors.startDate.message}</p>
          )}
        </div>
        {type !== "PACKAGE" && (
          <div>
            <label className="text-sm font-semibold text-ink-900">
              {type === "HOTEL" ? "Check-out" : "End Date"}
            </label>
            <input
              {...register("endDate")}
              type="date"
              className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
            />
          </div>
        )}
        <div>
          <label className="text-sm font-semibold text-ink-900">
            {type === "CAR" ? "Passengers" : "Guests"}
          </label>
          <input
            {...register("guests")}
            type="number"
            min={1}
            max={50}
            className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-900">
          Anything else we should know? (optional)
        </label>
        <textarea
          {...register("notes")}
          rows={3}
          placeholder="Special requests, elderly travelers, accessibility needs, etc."
          className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
        />
      </div>

      {serverError && (
        <p className="text-sm text-brand-600">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-cream-50 hover:bg-brand-800 transition-colors disabled:opacity-60"
      >
        {isSubmitting && <Loader2 className="size-4 animate-spin" />}
        Send Booking Request
      </button>
      <p className="text-center text-xs text-ink-500">
        This is a request, not a payment. Our team will confirm availability and pricing with you directly.
      </p>
    </form>
  );
}
