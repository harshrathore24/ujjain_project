import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Users2, Snowflake, UserCheck, CheckCircle2 } from "lucide-react";
import { getCarBySlug, getCars } from "@/lib/data";
import { formatINR } from "@/lib/utils";
import { RatingStars } from "@/components/ui/rating-stars";

export async function generateStaticParams() {
  const cars = await getCars();
  return cars.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/cars/[slug]">) {
  const { slug } = await props.params;
  const car = await getCarBySlug(slug);
  if (!car) return {};
  return { title: car.name, description: `${car.type} rental in Ujjain with driver.` };
}

export default async function CarDetailPage(props: PageProps<"/cars/[slug]">) {
  const { slug } = await props.params;
  const car = await getCarBySlug(slug);
  if (!car) notFound();

  const gallery = JSON.parse(car.gallery) as string[];
  const features = JSON.parse(car.features) as string[];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
      <nav className="text-xs text-ink-500 mb-6">
        <Link href="/cars" className="hover:text-brand-700">
          Car Rental
        </Link>{" "}
        / <span className="text-ink-700">{car.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {car.type}
            </span>
            <RatingStars rating={car.rating} showValue />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900">
            {car.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-ink-500">
            <span className="flex items-center gap-1.5">
              <Users2 className="size-4 text-brand-600" />
              {car.seats} seats
            </span>
            {car.ac && (
              <span className="flex items-center gap-1.5">
                <Snowflake className="size-4 text-brand-600" />
                Air Conditioned
              </span>
            )}
            {car.withDriver && (
              <span className="flex items-center gap-1.5">
                <UserCheck className="size-4 text-brand-600" />
                Driver Included
              </span>
            )}
          </div>

          <div className="relative mt-8 h-72 sm:h-96 overflow-hidden rounded-2xl bg-cream-100">
            <Image
              src={car.image}
              alt={car.name}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          {gallery.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-4">
              {gallery.map((src, i) => (
                <div
                  key={i}
                  className="relative h-40 overflow-hidden rounded-xl bg-cream-100"
                >
                  <Image
                    src={src}
                    alt={`${car.name} photo ${i + 1}`}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-ink-900 mb-4">
              Features
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-sm text-ink-700"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-28 rounded-2xl border border-gold-200/60 bg-white p-6 shadow-sm">
            <p className="font-display text-3xl font-semibold text-brand-700">
              {formatINR(car.pricePerDay)}
              <span className="text-sm font-normal text-ink-500"> /day</span>
            </p>

            <Link
              href={`/booking?type=CAR&id=${car.id}&name=${encodeURIComponent(
                car.name
              )}`}
              className="mt-6 flex items-center justify-center rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-cream-50 hover:bg-brand-800 transition-colors"
            >
              Book This Car
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
