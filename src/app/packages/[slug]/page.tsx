import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, CheckCircle2, MapPinned } from "lucide-react";
import { getPackageBySlug, getPackages } from "@/lib/data";
import { formatINR } from "@/lib/utils";
import { RatingStars } from "@/components/ui/rating-stars";

export async function generateStaticParams() {
  const packages = await getPackages();
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/packages/[slug]">) {
  const { slug } = await props.params;
  const pkg = await getPackageBySlug(slug);
  if (!pkg) return {};
  return { title: pkg.title, description: pkg.summary };
}

export default async function PackageDetailPage(
  props: PageProps<"/packages/[slug]">
) {
  const { slug } = await props.params;
  const pkg = await getPackageBySlug(slug);
  if (!pkg) notFound();

  const gallery = JSON.parse(pkg.gallery) as string[];
  const highlights = JSON.parse(pkg.highlights) as string[];
  const itinerary = JSON.parse(pkg.itinerary) as {
    day: number;
    title: string;
    activities: string[];
  }[];
  const inclusions = JSON.parse(pkg.inclusions) as string[];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
      <nav className="text-xs text-ink-500 mb-6">
        <Link href="/packages" className="hover:text-brand-700">
          Packages
        </Link>{" "}
        / <span className="text-ink-700">{pkg.title}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {pkg.category}
            </span>
            {pkg.popular && (
              <span className="rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-brand-950">
                Popular
              </span>
            )}
            <RatingStars rating={pkg.rating} showValue />
            <span className="text-xs text-ink-500">
              ({pkg.reviewCount} reviews)
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900">
            {pkg.title}
          </h1>
          <p className="mt-3 text-ink-500 leading-relaxed">{pkg.description}</p>

          <div className="relative mt-8 h-72 sm:h-96 overflow-hidden rounded-2xl">
            <Image
              src={pkg.image}
              alt={pkg.title}
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
                    alt={`${pkg.title} photo ${i + 1}`}
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
              Highlights
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2.5 text-sm text-ink-700"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-ink-900 mb-4">
              Itinerary
            </h2>
            <div className="space-y-5">
              {itinerary.map((day) => (
                <div
                  key={day.day}
                  className="rounded-2xl border border-gold-200/60 bg-white p-5"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-cream-50">
                      D{day.day}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-ink-900">
                      {day.title}
                    </h3>
                  </div>
                  <ul className="space-y-1.5 pl-1">
                    {day.activities.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2.5 text-sm text-ink-500"
                      >
                        <MapPinned className="mt-0.5 size-3.5 shrink-0 text-gold-500" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-ink-900 mb-4">
              What&apos;s Included
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {inclusions.map((inc) => (
                <li
                  key={inc}
                  className="flex items-start gap-2.5 text-sm text-ink-700"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  {inc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-28 rounded-2xl border border-gold-200/60 bg-white p-6 shadow-sm">
            {pkg.originalPrice && pkg.originalPrice > pkg.price && (
              <span className="text-sm text-ink-500 line-through">
                {formatINR(pkg.originalPrice)}
              </span>
            )}
            <p className="font-display text-3xl font-semibold text-brand-700">
              {formatINR(pkg.price)}
              <span className="text-sm font-normal text-ink-500"> /person</span>
            </p>

            <div className="mt-4 flex items-center gap-4 text-sm text-ink-500 border-t border-gold-100 pt-4">
              <span className="flex items-center gap-1.5">
                <Clock className="size-4 text-brand-600" />
                {pkg.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="size-4 text-brand-600" />
                Up to {pkg.maxGroup} people
              </span>
            </div>

            <Link
              href={`/booking?type=PACKAGE&id=${pkg.id}&name=${encodeURIComponent(
                pkg.title
              )}`}
              className="mt-6 flex items-center justify-center rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-cream-50 hover:bg-brand-800 transition-colors"
            >
              Book This Package
            </Link>
            <p className="mt-3 text-center text-xs text-ink-500">
              No payment required now — we&apos;ll confirm details with you first.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
