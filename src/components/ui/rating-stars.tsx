import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function RatingStars({
  rating,
  size = "sm",
  showValue = false,
}: {
  rating: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}) {
  const sizeClass = size === "lg" ? "size-5" : size === "md" ? "size-4" : "size-3.5";
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i + 1 <= Math.round(rating);
          return (
            <Star
              key={i}
              className={cn(
                sizeClass,
                filled ? "fill-gold-400 text-gold-400" : "fill-cream-200 text-cream-300"
              )}
            />
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm font-semibold text-ink-700">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}
