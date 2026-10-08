"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Star, ArrowRight, PlayCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/ujjain-hero-temple/1920/1080"
          alt="Mahakaleshwar Temple, Ujjain"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-950/80 to-cream-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/40 to-transparent" />
      </div>

      <div
        className="absolute -top-24 -right-24 size-[420px] rounded-full bg-gold-500/20 blur-3xl animate-float-slow"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-28 sm:pt-24 sm:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 border border-gold-400/30 px-4 py-1.5 text-xs font-medium text-gold-200 backdrop-blur-sm">
            <ShieldCheck className="size-3.5" />
            Government-registered local tour guide
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-cream-50">
            Discover the sacred soul of{" "}
            <span className="text-gold-300">Ujjain</span>, guided by locals
            who know every ghat and gali.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-cream-100/80 leading-relaxed max-w-xl">
            {siteConfig.description} From Mahakaleshwar darshan to hotel stays
            and private car rentals — plan your entire yatra in one place.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/packages"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-brand-950 transition-transform hover:scale-[1.03]"
            >
              Explore Yatra Packages
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 px-6 py-3.5 text-sm font-semibold text-cream-50 hover:bg-cream-50/10 transition-colors"
            >
              <PlayCircle className="size-4" />
              Watch Our Journeys
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["t1", "t2", "t3", "t4"].map((seed) => (
                <Image
                  key={seed}
                  src={`https://picsum.photos/seed/${seed}/80/80`}
                  alt="Happy traveler"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-brand-950 object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-xs text-cream-100/70 mt-0.5">
                Rated 4.9/5 by 1,200+ travelers
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
