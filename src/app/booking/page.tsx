import type { Metadata } from "next";
import { PhoneCall, ShieldCheck, Clock3 } from "lucide-react";
import { getPackages, getHotels, getCars } from "@/lib/data";
import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book Your Yatra",
  description:
    "Request a booking for an Ujjain tour package, hotel stay or car rental — no payment required upfront.",
};

export default async function BookingPage(props: PageProps<"/booking">) {
  const params = await props.searchParams;
  const [packages, hotels, cars] = await Promise.all([
    getPackages(),
    getHotels(),
    getCars(),
  ]);

  const typeParam = typeof params.type === "string" ? params.type : "PACKAGE";
  const defaultType = (["PACKAGE", "HOTEL", "CAR"].includes(typeParam)
    ? typeParam
    : "PACKAGE") as "PACKAGE" | "HOTEL" | "CAR";
  const defaultItemId = typeof params.id === "string" ? params.id : undefined;

  return (
    <>
      <PageHero
        eyebrow="Plan Your Trip"
        title="Book your Ujjain yatra"
        description="Fill in your details and preferences — our local team will personally confirm availability with you, no online payment required."
        image="https://picsum.photos/seed/booking-hero/1600/500"
      />

      <section className="mx-auto max-w-6xl px-6 lg:px-10 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <BookingForm
              packages={packages.map((p) => ({
                id: p.id,
                name: p.title,
                price: p.price,
                priceLabel: "/person",
              }))}
              hotels={hotels.map((h) => ({
                id: h.id,
                name: h.name,
                price: h.pricePerNight,
                priceLabel: "/night",
              }))}
              cars={cars.map((c) => ({
                id: c.id,
                name: c.name,
                price: c.pricePerDay,
                priceLabel: "/day",
              }))}
              defaultType={defaultType}
              defaultItemId={defaultItemId}
            />
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-gold-200/60 bg-white p-6">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <ShieldCheck className="size-5" />
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">
                No payment now
              </h3>
              <p className="mt-1.5 text-sm text-ink-500">
                We confirm every detail with you personally before any payment is discussed.
              </p>
            </div>
            <div className="rounded-2xl border border-gold-200/60 bg-white p-6">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Clock3 className="size-5" />
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">
                Quick response
              </h3>
              <p className="mt-1.5 text-sm text-ink-500">
                Most requests get a call or WhatsApp reply within 2–4 hours.
              </p>
            </div>
            <div className="rounded-2xl bg-brand-950 p-6 text-cream-50">
              <span className="flex size-10 items-center justify-center rounded-full bg-cream-50/10 text-gold-300">
                <PhoneCall className="size-5" />
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">
                Prefer to talk?
              </h3>
              <p className="mt-1.5 text-sm text-cream-100/70">
                Call or WhatsApp us directly and we&apos;ll help you plan right away.
              </p>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="mt-4 inline-flex items-center justify-center w-full rounded-full bg-gold-400 px-4 py-2.5 text-sm font-semibold text-brand-950"
              >
                {siteConfig.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
