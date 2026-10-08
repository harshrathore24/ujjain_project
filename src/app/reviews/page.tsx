import type { Metadata } from "next";
import { Star } from "lucide-react";
import { getReviews, getReviewStats } from "@/lib/data";
import { ReviewCard } from "@/components/review-card";
import { ReviewForm } from "@/components/review-form";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Traveler Reviews",
  description:
    "Read what travelers say about their Ujjain darshan experience, and share your own review.",
};

export default async function ReviewsPage() {
  const [reviews, stats] = await Promise.all([getReviews(), getReviewStats()]);

  return (
    <>
      <PageHero
        eyebrow="Traveler Stories"
        title="Real reviews from real yatris"
        description="Every review here comes from a genuine traveler who booked a package, hotel or car rental with us."
        image="https://picsum.photos/seed/reviews-hero/1600/500"
      />

      <section className="mx-auto max-w-6xl px-6 lg:px-10 py-16">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <div className="space-y-8">
            <div className="rounded-2xl border border-gold-200/60 bg-white p-6 text-center">
              <p className="font-display text-5xl font-semibold text-brand-700">
                {stats.avg.toFixed(1)}
              </p>
              <div className="mt-2 flex justify-center items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-5 ${
                      i + 1 <= Math.round(stats.avg)
                        ? "fill-gold-400 text-gold-400"
                        : "fill-cream-200 text-cream-300"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-1.5 text-sm text-ink-500">
                Based on {stats.total} reviews
              </p>

              <div className="mt-6 space-y-2">
                {stats.distribution.map(({ star, count }) => (
                  <div key={star} className="flex items-center gap-2 text-xs">
                    <span className="w-8 text-ink-500">{star} star</span>
                    <div className="h-2 flex-1 rounded-full bg-cream-200 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gold-400"
                        style={{
                          width: `${
                            stats.total ? (count / stats.total) * 100 : 0
                          }%`,
                        }}
                      />
                    </div>
                    <span className="w-6 text-right text-ink-500">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-ink-900 mb-3">
                Share your experience
              </h3>
              <ReviewForm />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 content-start">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
