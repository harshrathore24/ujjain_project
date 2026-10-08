import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch to plan your Ujjain trip — call, WhatsApp or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="We're happy to help plan your trip"
        description="Reach out with your travel dates and questions — our local team replies quickly."
        image="https://picsum.photos/seed/contact-hero/1600/500"
      />

      <section className="mx-auto max-w-6xl px-6 lg:px-10 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gold-200/60 bg-white p-5">
                <Phone className="size-5 text-brand-600" />
                <p className="mt-2 text-sm font-semibold text-ink-900">Call / WhatsApp</p>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-sm text-ink-500 hover:text-brand-700">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="rounded-2xl border border-gold-200/60 bg-white p-5">
                <Mail className="size-5 text-brand-600" />
                <p className="mt-2 text-sm font-semibold text-ink-900">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-ink-500 hover:text-brand-700">
                  {siteConfig.email}
                </a>
              </div>
              <div className="rounded-2xl border border-gold-200/60 bg-white p-5">
                <MapPin className="size-5 text-brand-600" />
                <p className="mt-2 text-sm font-semibold text-ink-900">Office</p>
                <p className="text-sm text-ink-500">{siteConfig.address}</p>
              </div>
              <div className="rounded-2xl border border-gold-200/60 bg-white p-5">
                <Clock className="size-5 text-brand-600" />
                <p className="mt-2 text-sm font-semibold text-ink-900">Hours</p>
                <p className="text-sm text-ink-500">Daily, 5:00 AM – 9:00 PM</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gold-200/60 h-64">
              <iframe
                title="Map showing Ujjain"
                className="h-full w-full"
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=75.72%2C23.14%2C75.86%2C23.22&layer=mapnik&marker=23.1828%2C75.7682"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
