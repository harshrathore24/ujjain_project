import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-950">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/60 via-brand-950/85 to-brand-950" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 py-16 sm:py-20 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
          {eyebrow}
        </span>
        <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-cream-50">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-cream-100/75 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
