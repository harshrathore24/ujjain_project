"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Star, CheckCircle2, Loader2 } from "lucide-react";
import {
  reviewSchema,
  type ReviewFormValues,
  type ReviewInput,
} from "@/lib/schemas";
import { cn } from "@/lib/utils";

export function ReviewForm() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ReviewFormValues, unknown, ReviewInput>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      location: "",
      rating: 5,
      tourType: "",
      comment: "",
    },
  });

  const rating = watch("rating");

  async function onSubmit(values: ReviewInput) {
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      setSubmitted(true);
      router.refresh();
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold-200/60 bg-white p-8 text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-3 font-display text-xl font-semibold text-ink-900">
          Thank you for sharing!
        </h3>
        <p className="mt-1.5 text-sm text-ink-500">
          Your review has been posted.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-gold-200/60 bg-white p-6 sm:p-8 space-y-5"
    >
      <div>
        <label className="text-sm font-semibold text-ink-900">Your rating</label>
        <Controller
          control={control}
          name="rating"
          render={({ field }) => (
            <div className="mt-2 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => field.onChange(star)}
                  aria-label={`${star} stars`}
                >
                  <Star
                    className={cn(
                      "size-7 transition-colors",
                      (hoverRating || Number(rating)) >= star
                        ? "fill-gold-400 text-gold-400"
                        : "fill-cream-200 text-cream-300"
                    )}
                  />
                </button>
              ))}
            </div>
          )}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-ink-900">Your Name</label>
          <input
            {...register("name")}
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-brand-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm font-semibold text-ink-900">City (optional)</label>
          <input
            {...register("location")}
            placeholder="e.g. Mumbai"
            className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-900">
          Which service did you use? (optional)
        </label>
        <input
          {...register("tourType")}
          placeholder="e.g. Mahakal Darshan Day Trip"
          className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-900">Your Experience</label>
        <textarea
          {...register("comment")}
          rows={4}
          placeholder="Tell other travelers about your trip…"
          className="mt-2 w-full rounded-xl border border-gold-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
        />
        {errors.comment && (
          <p className="mt-1 text-xs text-brand-600">{errors.comment.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-cream-50 hover:bg-brand-800 transition-colors disabled:opacity-60"
      >
        {isSubmitting && <Loader2 className="size-4 animate-spin" />}
        Submit Review
      </button>
    </form>
  );
}
