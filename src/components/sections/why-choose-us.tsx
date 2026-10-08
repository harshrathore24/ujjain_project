import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const points = [
  "9+ years guiding pilgrims and travelers through Ujjain",
  "12,500+ travelers guided across solo trips, families & groups",
  "Government-registered guide with deep ritual & historical knowledge",
  "Transparent pricing — no hidden costs, no forced shopping stops",
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-3xl">
            <Image
              src="https://picsum.photos/seed/guide-portrait/700/900"
              alt="Local Ujjain tour guide"
              fill
              sizes="(min-width: 1024px) 400px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:right-4 w-56 rounded-2xl bg-white p-5 shadow-xl shadow-brand-950/15 border border-gold-200">
            <p className="font-display text-3xl font-semibold text-brand-700">12,500+</p>
            <p className="text-xs text-ink-500 mt-1">Happy travelers guided since 2016</p>
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Why travelers trust us"
            title="A local guide who treats your yatra like his own family's"
            description="We started with a single scooter and a love for Ujjain's stories. Today, we've walked thousands of pilgrims through Mahakaleshwar's queues, explained centuries of history at forgotten temples, and made sure every traveler leaves with more than just photographs."
          />

          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-ink-700">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-600" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
