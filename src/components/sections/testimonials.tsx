import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getReviews } from "@/lib/data";
import { ReviewCard } from "@/components/review-card";
import { SectionHeading } from "@/components/ui/section-heading";

export async function Testimonials() {
  const reviews = (await getReviews()).slice(0, 6);

  return (
    <section className="bg-brand-950 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            align="left"
            light
            eyebrow="Traveler stories"
            title="What our travelers say"
          />
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-gold-300 hover:text-gold-200"
          >
            Read all reviews
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
