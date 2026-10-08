import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-brand-800">
        <Image
          src="https://picsum.photos/seed/cta-banner-ujjain/1600/500"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-800/80 to-brand-800/40" />
        <div className="relative flex flex-col items-start gap-6 px-8 py-14 sm:px-14 sm:py-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream-50 max-w-xl">
            Ready to plan your Ujjain yatra?
          </h2>
          <p className="text-cream-100/80 max-w-lg">
            Tell us your travel dates and group size — we&apos;ll put together
            darshan, stay and travel in one seamless plan.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-brand-950 hover:scale-[1.03] transition-transform"
            >
              Start Planning
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/30 px-6 py-3.5 text-sm font-semibold text-cream-50 hover:bg-cream-50/10 transition-colors"
            >
              <Phone className="size-4" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
