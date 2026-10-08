"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
        "Namaste! I'd like to know more about Ujjain tour packages."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:px-5"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-5 fill-white/15" />
      <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>
    </a>
  );
}
