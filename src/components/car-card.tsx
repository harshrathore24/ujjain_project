import Image from "next/image";
import Link from "next/link";
import { Users2, Snowflake, ArrowUpRight, UserCheck } from "lucide-react";
import type { Car } from "@prisma/client";
import { formatINR } from "@/lib/utils";
import { RatingStars } from "@/components/ui/rating-stars";

export function CarCard({ car }: { car: Car }) {
  return (
    <Link
      href={`/cars/${car.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gold-200/60 shadow-sm transition-all hover:shadow-xl hover:shadow-brand-900/10 hover:-translate-y-1"
    >
      <div className="relative h-44 overflow-hidden bg-cream-100">
        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 rounded-full bg-brand-950/70 backdrop-blur px-3 py-1 text-[11px] font-medium text-cream-50">
          {car.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <RatingStars rating={car.rating} showValue />
        <h3 className="mt-2 font-display text-lg font-semibold text-ink-900 leading-snug">
          {car.name}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-ink-500">
          <span className="flex items-center gap-1.5">
            <Users2 className="size-3.5 text-brand-600" />
            {car.seats} seats
          </span>
          {car.ac && (
            <span className="flex items-center gap-1.5">
              <Snowflake className="size-3.5 text-brand-600" />
              AC
            </span>
          )}
          {car.withDriver && (
            <span className="flex items-center gap-1.5">
              <UserCheck className="size-3.5 text-brand-600" />
              Driver included
            </span>
          )}
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-gold-100 pt-4">
          <p className="font-display text-xl font-semibold text-brand-700">
            {formatINR(car.pricePerDay)}
            <span className="text-xs font-normal text-ink-500"> /day</span>
          </p>
          <span className="flex size-9 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-cream-50">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
