"use client";

import { useEffect, useSyncExternalStore } from "react";
import Script from "next/script";
import { Languages } from "lucide-react";

const HINDI_COOKIE = /(?:^|;\s*)googtrans=\/en\/hi/;

function subscribe() {
  return () => {};
}

function useIsHindi() {
  return useSyncExternalStore(
    subscribe,
    () => HINDI_COOKIE.test(document.cookie),
    () => false
  );
}

function setLanguage(hindi: boolean) {
  if (hindi) {
    document.cookie = "googtrans=/en/hi; path=/";
  } else {
    document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    const host = window.location.hostname;
    document.cookie = `googtrans=; path=/; domain=${host}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
  window.location.reload();
}

// Google Translate rewrites text nodes, which can make React throw on later DOM updates.
function usePatchDomForTranslate(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const originalRemoveChild = Node.prototype.removeChild;
    const originalInsertBefore = Node.prototype.insertBefore;

    Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
      if (child.parentNode !== this) return child;
      return originalRemoveChild.call(this, child) as T;
    };
    Node.prototype.insertBefore = function <T extends Node>(
      this: Node,
      newNode: T,
      referenceNode: Node | null
    ): T {
      if (referenceNode && referenceNode.parentNode !== this) return newNode;
      return originalInsertBefore.call(this, newNode, referenceNode) as T;
    };

    return () => {
      Node.prototype.removeChild = originalRemoveChild;
      Node.prototype.insertBefore = originalInsertBefore;
    };
  }, [active]);
}

export function LanguageToggle() {
  const isHindi = useIsHindi();
  usePatchDomForTranslate(isHindi);

  return (
    <>
      <button
        type="button"
        onClick={() => setLanguage(!isHindi)}
        aria-label={isHindi ? "Switch to English" : "हिंदी में बदलें"}
        className="notranslate flex items-center gap-1.5 rounded-full border border-gold-300 bg-cream-50 px-3.5 py-2 text-sm font-semibold text-brand-800 transition-colors hover:bg-gold-100"
        translate="no"
      >
        <Languages className="size-4" />
        {isHindi ? "English" : "हिंदी"}
      </button>

      {isHindi && (
        <>
          <div id="google_translate_element" className="hidden" />
          <Script id="google-translate-init" strategy="afterInteractive">
            {`function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'en', includedLanguages: 'hi,en', autoDisplay: false },
                'google_translate_element'
              );
            }`}
          </Script>
          <Script
            src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            strategy="afterInteractive"
          />
        </>
      )}
    </>
  );
}
