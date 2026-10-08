import type { Metadata } from "next";
import Image from "next/image";
import { Award, Users, Languages, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story behind Mahakal Yatra — a local Ujjain guide service trusted by thousands of travelers.",
};

const milestones = [
  { year: "2016", text: "Started guiding solo travelers around Mahakaleshwar Temple on a single scooter." },
  { year: "2018", text: "Became a government-registered local guide and formed a small trusted driver network." },
  { year: "2020", text: "Launched structured Yatra packages including the now-popular Bhasma Aarti Special." },
  { year: "2023", text: "Crossed 10,000 travelers guided; added hotel and car rental partnerships." },
  { year: "2026", text: "12,500+ travelers guided, serving families, solo yatris and international visitors." },
];

const credentials = [
  { icon: ShieldCheck, title: "Registered Guide", text: "Certified by Madhya Pradesh Tourism Board." },
  { icon: Languages, title: "Multilingual", text: "Fluent in Hindi, English and conversational Marathi & Gujarati." },
  { icon: Users, title: "Trained Team", text: "A small network of trusted drivers and local coordinators." },
  { icon: Award, title: "9+ Years", text: "Deep knowledge of Ujjain's rituals, history and hidden spots." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Local roots, thousands of journeys"
        description="We're not a large travel corporation — we're a small, dedicated local team that treats every traveler's yatra like our own family's pilgrimage."
        image="https://picsum.photos/seed/about-hero/1600/500"
      />

      <StatsBar />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-3xl">
            <Image
              src="https://picsum.photos/seed/about-guide/700/900"
              alt="Founder guiding travelers in Ujjain"
              fill
              sizes="(min-width: 1024px) 400px, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              How it started
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ink-900">
              From one scooter to thousands of guided yatras
            </h2>
            <p className="mt-4 text-ink-500 leading-relaxed">
              In 2016, our founder began guiding a handful of travelers around
              Mahakaleshwar with nothing but local knowledge and a two-wheeler.
              Word spread quickly — visitors appreciated having someone who
              understood not just the routes, but the rituals, the right
              timings for aarti, and the stories behind every temple.
            </p>
            <p className="mt-4 text-ink-500 leading-relaxed">
              Today, that same philosophy drives everything we do: transparent
              pricing, genuine care for elderly and first-time travelers, and
              a refusal to turn pilgrimage into a rushed checklist.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 text-center">
            Our journey
          </h2>
          <div className="mt-10 mx-auto max-w-2xl space-y-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-cream-50">
                    {m.year}
                  </span>
                  {i < milestones.length - 1 && (
                    <span className="mt-1 h-full w-px flex-1 bg-gold-200" />
                  )}
                </div>
                <p className="pb-8 text-sm text-ink-700 leading-relaxed pt-2">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-gold-200/60 bg-white p-6 text-center"
            >
              <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <c.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
                {c.title}
              </h3>
              <p className="mt-1.5 text-sm text-ink-500">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
