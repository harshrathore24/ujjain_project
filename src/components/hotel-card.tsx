import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { Hotel } from "@prisma/client";
import { formatINR } from "@/lib/utils";
import { RatingStars } from "@/components/ui/rating-stars";

export function HotelCard({ hotel }: { hotel: Hotel }) {
  const amenities = JSON.parse(hotel.amenities) as string[];
  return (
    <Link
      href={`/hotels/${hotel.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gold-200/60 shadow-sm transition-all hover:shadow-xl hover:shadow-brand-900/10 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 rounded-full bg-brand-950/70 backdrop-blur px-3 py-1 text-[11px] font-medium text-cream-50">
          {hotel.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <RatingStars rating={hotel.rating} showValue />
        <h3 className="mt-2 font-display text-lg font-semibold text-ink-900 leading-snug">
          {hotel.name}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-ink-500">
          <MapPin className="size-3.5 text-brand-600" />
          {hotel.location} · {hotel.distanceFromTemple}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {amenities.slice(0, 3).map((a) => (
            <span
              key={a}
              className="rounded-full bg-cream-100 px-2.5 py-1 text-[11px] text-ink-700"
            >
              {a}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-gold-100 pt-4">
          <p className="font-display text-xl font-semibold text-brand-700">
            {formatINR(hotel.pricePerNight)}
            <span className="text-xs font-normal text-ink-500"> /night</span>
          </p>
          <span className="flex size-9 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-cream-50">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
