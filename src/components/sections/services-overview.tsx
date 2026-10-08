import Link from "next/link";
import { Compass, Hotel, Car, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    icon: Compass,
    title: "Darshan & Yatra Packages",
    description:
      "Handpicked itineraries for every kind of traveler — day trips, Bhasma Aarti specials, and multi-day heritage circuits.",
    href: "/packages",
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    description:
      "From budget stays near the temple to 5-star riverside properties, all vetted for comfort and cleanliness.",
    href: "/hotels",
  },
  {
    icon: Car,
    title: "Car Rental with Driver",
    description:
      "AC sedans, SUVs and tempo travellers with experienced local drivers who know every shortcut in Ujjain.",
    href: "/cars",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Trip Planning",
    description:
      "Tell us your dates and group size — we'll build a custom plan combining darshan, stay and travel.",
    href: "/booking",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-cream-100/60 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Everything in one place"
          title="Plan your entire Ujjain trip here"
          description="No need to juggle multiple apps and agents — darshan planning, stay and travel are all handled by one trusted local team."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-gold-200/60 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand-700 text-cream-50 transition-colors group-hover:bg-gold-400 group-hover:text-brand-950">
                <service.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
