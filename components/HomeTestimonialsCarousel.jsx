"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Container from "./Container";
import FadeIn from "./FadeIn";
import GridPattern from "./GridPattern";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import logoBrightPathDark from "@/images/clients/bright-path/logo-dark.svg";
import logoFamilyFundDark from "@/images/clients/family-fund/logo-dark.svg";

const slides = [
  {
    quote:
      "The team at Pehechan went above and beyond with our onboarding and built the exact growth engine we needed.",
    name: "Mira Solanki",
    title: "Founder, Phobia",
    logo: logoPhobiaDark,
    client: "Phobia",
    image: "https://picsum.photos/seed/phobia-founder/800/900",
  },
  {
    quote:
      "From positioning to paid strategy, every step was precise. We stopped looking like a service and started feeling premium.",
    name: "Raghav Bhansali",
    title: "Director, Bright Path",
    logo: logoBrightPathDark,
    client: "Bright Path",
    image: "https://picsum.photos/seed/brightpath-director/800/900",
  },
  {
    quote:
      "Their execution speed is unmatched. We moved from scattered messaging to a single voice that converts.",
    name: "Aanya Mehta",
    title: "Head of Growth, Family Fund",
    logo: logoFamilyFundDark,
    client: "Family Fund",
    image: "https://picsum.photos/seed/familyfund-growth/800/900",
  },
];

const HomeTestimonialsCarousel = () => {
  const [active, setActive] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const current = useMemo(() => slides[active], [active]);

  return (
    <section className="relative isolate overflow-hidden bg-brand-blush-light/30 py-16 md:py-24 lg:h-screen lg:min-h-[100dvh] lg:py-0">
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-brand-blush/30 stroke-brand-espresso/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container className="lg:h-full">
        <FadeIn className="lg:h-full">
          <div className="grid grid-cols-1 items-start gap-10 lg:h-full lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-rose/80">
                Testimonials
              </p>
              <blockquote className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-brand-espresso sm:text-4xl lg:text-5xl">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="text-lg font-semibold text-brand-espresso">{current.name}</p>
                <p className="text-sm text-brand-espresso/70">{current.title}</p>
              </div>
              <div className="mt-8">
                <Image src={current.logo} alt={current.client} unoptimized />
              </div>
              <div className="mt-8 flex items-center gap-2">
                {slides.map((slide, i) => (
                  <button
                    key={slide.client}
                    type="button"
                    onClick={() => setActive(i)}
                    className={clsx(
                      "h-2.5 rounded-full transition-all",
                      i === active
                        ? "w-8 bg-brand-rose"
                        : "w-2.5 bg-brand-sage/45 hover:bg-brand-sage/70"
                    )}
                    aria-label={`Show testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="relative hidden lg:col-span-5 lg:block">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-brand-sage/25 bg-white/50">
                <Image
                  src={current.image}
                  alt={`${current.name} portrait`}
                  fill
                  sizes="(max-width: 1024px) 80vw, 32vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default HomeTestimonialsCarousel;
