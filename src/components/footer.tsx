import Link from "next/link";
import { Users, Camera, PlayCircle, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-brand-950 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="flex size-9 items-center justify-center rounded-full bg-gold-400 text-brand-950 font-display text-lg">
              ॐ
            </span>
            <span className="font-display text-xl font-semibold text-cream-50">
              {siteConfig.name}
            </span>
          </div>
          <p className="text-sm text-cream-100/70 leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="rounded-full bg-cream-50/10 p-2 hover:bg-gold-400 hover:text-brand-950 transition-colors">
              <Camera className="size-4" />
            </a>
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="rounded-full bg-cream-50/10 p-2 hover:bg-gold-400 hover:text-brand-950 transition-colors">
              <Users className="size-4" />
            </a>
            <a href={siteConfig.social.youtube} aria-label="YouTube" className="rounded-full bg-cream-50/10 p-2 hover:bg-gold-400 hover:text-brand-950 transition-colors">
              <PlayCircle className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gold-300">Explore</h4>
          <ul className="space-y-2.5 text-sm text-cream-100/75">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href as never} className="hover:text-gold-300 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gold-300">Services</h4>
          <ul className="space-y-2.5 text-sm text-cream-100/75">
            <li><Link href="/packages" className="hover:text-gold-300 transition-colors">Darshan &amp; Yatra Packages</Link></li>
            <li><Link href="/hotels" className="hover:text-gold-300 transition-colors">Hotel Booking</Link></li>
            <li><Link href="/cars" className="hover:text-gold-300 transition-colors">Car Rental with Driver</Link></li>
            <li><Link href="/booking" className="hover:text-gold-300 transition-colors">Custom Trip Planning</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gold-300">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-cream-100/75">
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 mt-0.5 shrink-0 text-gold-300" />
              {siteConfig.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-gold-300" />
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-gold-300">{siteConfig.phone}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-gold-300" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-300">{siteConfig.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-50/10 py-5 px-6 text-center text-xs text-cream-100/50">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Crafted with devotion for every Ujjain yatri.
      </div>
    </footer>
  );
}
