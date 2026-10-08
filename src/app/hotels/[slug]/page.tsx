import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, CheckCircle2 } from "lucide-react";
import { getHotelBySlug, getHotels } from "@/lib/data";
import { formatINR } from "@/lib/utils";
import { RatingStars } from "@/components/ui/rating-stars";

export async function generateStaticParams() {
  const hotels = await getHotels();
  return hotels.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata(props: PageProps<"/hotels/[slug]">) {
  const { slug } = await props.params;
  const hotel = await getHotelBySlug(slug);
  if (!hotel) return {};
  return { title: hotel.name, description: hotel.description };
}

export default async function HotelDetailPage(
  props: PageProps<"/hotels/[slug]">
) {
  const { slug } = await props.params;
  const hotel = await getHotelBySlug(slug);
  if (!hotel) notFound();

  const gallery = JSON.parse(hotel.gallery) as string[];
  const amenities = JSON.parse(hotel.amenities) as string[];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
      <nav className="text-xs text-ink-500 mb-6">
        <Link href="/hotels" className="hover:text-brand-700">
          Hotels
        </Link>{" "}
        / <span className="text-ink-700">{hotel.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {hotel.category}
            </span>
            <RatingStars rating={hotel.rating} showValue />
            <span className="text-xs text-ink-500">
              ({hotel.reviewCount} reviews)
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900">
            {hotel.name}
          </h1>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-500">
            <MapPin className="size-4 text-brand-600" />
            {hotel.location} · {hotel.distanceFromTemple}
          </p>
          <p className="mt-3 text-ink-500 leading-relaxed">
            {hotel.description}
          </p>

          <div className="relative mt-8 h-72 sm:h-96 overflow-hidden rounded-2xl">
            <Image
              src={hotel.image}
              alt={hotel.name}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          {gallery.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-4">
              {gallery.map((src, i) => (
                <div
                  key={i}
                  className="relative h-28 sm:h-36 overflow-hidden rounded-xl"
                >
                  <Image
                    src={src}
                    alt={`${hotel.name} photo ${i + 1}`}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-ink-900 mb-4">
              Amenities
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {amenities.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-2.5 text-sm text-ink-700"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-28 rounded-2xl border border-gold-200/60 bg-white p-6 shadow-sm">
            <p className="font-display text-3xl font-semibold text-brand-700">
              {formatINR(hotel.pricePerNight)}
              <span className="text-sm font-normal text-ink-500"> /night</span>
            </p>

            <Link
              href={`/booking?type=HOTEL&id=${hotel.id}&name=${encodeURIComponent(
                hotel.name
              )}`}
              className="mt-6 flex items-center justify-center rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-cream-50 hover:bg-brand-800 transition-colors"
            >
              Book This Hotel
            </Link>
            <p className="mt-3 text-center text-xs text-ink-500">
              No payment required now — we&apos;ll confirm availability with you.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
