"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-cream-50/80 backdrop-blur-lg shadow-[0_1px_0_0_theme(colors.gold.200)]"
          : "bg-transparent"
      )}
    >
      <div className="hidden md:flex items-center justify-between px-6 lg:px-10 py-1.5 text-xs text-ink-500 border-b border-gold-200/60">
        <span className="flex items-center gap-1.5">
          <MapPin className="size-3.5 text-brand-600" />
          {siteConfig.address}
        </span>
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-1.5 hover:text-brand-700"
        >
          <Phone className="size-3.5 text-brand-600" />
          {siteConfig.phone}
        </a>
      </div>

      <nav className="flex items-center justify-between px-6 lg:px-10 py-3.5">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex size-9 items-center justify-center rounded-full bg-brand-700 text-gold-200 font-display text-lg">
            ॐ
          </span>
          <span className="font-display text-xl font-semibold text-brand-800 leading-none">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href as never}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-700",
                pathname === item.href ? "text-brand-700" : "text-ink-700"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/booking"
            className="rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-sm shadow-brand-900/20 transition-colors hover:bg-brand-800"
          >
            Book Your Yatra
          </Link>
        </div>

        <button
          className="lg:hidden rounded-full p-2 text-brand-800"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-gold-200 bg-cream-50 px-6 py-4 flex flex-col gap-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href as never}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-3 py-2.5 text-sm font-medium",
                pathname === item.href
                  ? "bg-gold-100 text-brand-800"
                  : "text-ink-700"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-brand-700 px-5 py-3 text-center text-sm font-semibold text-cream-50"
          >
            Book Your Yatra
          </Link>
        </div>
      )}
    </header>
  );
}
