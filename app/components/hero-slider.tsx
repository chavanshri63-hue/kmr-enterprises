"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/images/hero-construction.jpg", alt: "Civil construction site" },
  { src: "/images/project-commercial.jpg", alt: "Commercial project" },
  { src: "/images/project-residential.jpg", alt: "Residential project" },
  { src: "/images/project-industrial.jpg", alt: "Industrial project" },
  { src: "/images/service-plumbing.jpg", alt: "Plumbing and fire-fighting services" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  function goTo(i: number) {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }

  return (
    <section className="relative isolate w-full overflow-hidden border-b border-zinc-200">
      <div className="relative h-[55vh] min-h-[320px] w-full md:h-[70vh]">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className={`object-cover transition-opacity duration-[1200ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:pb-14">
          <div className="mx-auto w-full max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/90 md:text-sm">
              KMR Enterprises
            </p>
            <h2 className="mt-2 max-w-3xl text-2xl font-bold leading-tight text-white drop-shadow md:text-4xl">
              Infrastructure | Engineering | Real Estate
            </h2>
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-black/30 px-3 py-2 text-white backdrop-blur transition hover:bg-black/50 md:left-6"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-black/30 px-3 py-2 text-white backdrop-blur transition hover:bg-black/50 md:right-6"
        >
          ›
        </button>

        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2 md:bottom-5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
