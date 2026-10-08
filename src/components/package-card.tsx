import Image from "next/image";
import Link from "next/link";
import { Clock, Users, ArrowUpRight } from "lucide-react";
import type { Package } from "@prisma/client";
import { formatINR } from "@/lib/utils";
import { RatingStars } from "@/components/ui/rating-stars";

export function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gold-200/60 shadow-sm transition-all hover:shadow-xl hover:shadow-brand-900/10 hover:-translate-y-1"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {pkg.popular && (
          <span className="absolute top-3 left-3 rounded-full bg-gold-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-950">
            Popular
          </span>
        )}
        <span className="absolute top-3 right-3 rounded-full bg-brand-950/70 backdrop-blur px-3 py-1 text-[11px] font-medium text-cream-50">
          {pkg.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <RatingStars rating={pkg.rating} showValue />
        <h3 className="mt-2 font-display text-lg font-semibold text-ink-900 leading-snug">
          {pkg.title}
        </h3>
        <p className="mt-1.5 text-sm text-ink-500 line-clamp-2">{pkg.summary}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-ink-500">
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5 text-brand-600" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="size-3.5 text-brand-600" />
            Up to {pkg.maxGroup}
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-gold-100 pt-4">
          <div>
            {pkg.originalPrice && pkg.originalPrice > pkg.price && (
              <span className="text-xs text-ink-500 line-through mr-1.5">
                {formatINR(pkg.originalPrice)}
              </span>
            )}
            <p className="font-display text-xl font-semibold text-brand-700">
              {formatINR(pkg.price)}
              <span className="text-xs font-normal text-ink-500"> /person</span>
            </p>
          </div>
          <span className="flex size-9 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-cream-50">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
