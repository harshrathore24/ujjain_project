import type { Review } from "@prisma/client";
import { Quote } from "lucide-react";
import { RatingStars } from "@/components/ui/rating-stars";

export function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-full flex-col rounded-2xl border border-gold-200/60 bg-white p-6 shadow-sm">
      <Quote className="size-6 text-gold-300 mb-3" />
      <RatingStars rating={review.rating} />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
        &ldquo;{review.comment}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-gold-100 pt-4">
        <span className="flex size-10 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
          {initials}
        </span>
        <div>
          <p className="text-sm font-semibold text-ink-900">{review.name}</p>
          <p className="text-xs text-ink-500">
            {review.location}
            {review.tourType ? ` · ${review.tourType}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
