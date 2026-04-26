import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import GridPattern from "@/components/GridPattern";
import ServiceProofCarousel from "@/components/ServiceProofCarousel";
import { servicePages, serviceSlugs } from "@/constants/servicePages";
import {
  HiArrowRight,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineDocumentText,
  HiOutlinePencilSquare,
  HiOutlineSparkles,
} from "react-icons/hi2";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = servicePages[params.slug];
  if (!page) return {};
  return {
    title: page.metaTitle || `${page.navTitle} | Pehechan`,
    description: page.metaDescription || page.heroSubtitle,
  };
}

export default function ServiceDetailPage({ params }) {
  const page = servicePages[params.slug];
  if (!page) notFound();

  const sectionPadding = "py-20 md:py-24 lg:py-28";
  const sectionHeadingClass =
    "font-display text-3xl font-semibold leading-[1.08] tracking-tight text-brand-espresso [text-wrap:balance] md:text-4xl lg:text-5xl";
  const eyebrowClass =
    "text-xs font-semibold uppercase tracking-[0.18em] text-brand-rose/85";
  const softCardClass =
    "rounded-[1.5rem] border border-brand-sage/25 bg-white shadow-[0_16px_36px_-26px_rgba(61,51,42,0.28)]";

  const keywordList = page.whyKeywords
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
  const protocolGridClass =
    page.protocol.length >= 4 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  const specializationIcons = [
    HiOutlineDocumentText,
    HiOutlineSparkles,
    HiOutlinePencilSquare,
    HiOutlineArrowTopRightOnSquare,
  ];

  return (
    <main className="bg-white text-brand-espresso">
      {/* ── SECTION 1 · HERO ─────────────────────────────────────────── */}
      <section className={sectionPadding}>
        <Container>
          <FadeIn>
            <div className="max-w-4xl">
              <p className={eyebrowClass}>
                {page.heroLabel}
              </p>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-relaxed text-brand-espresso [text-wrap:balance] sm:text-5xl lg:text-6xl">
                {page.heroTitle}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-brand-espresso/68 md:text-2xl">
                {page.heroSubtitle}
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className={`bg-stone-50 ${sectionPadding}`}>
        <Container>
          <FadeIn>
            <div className="rounded-[2rem] bg-brand-blush-light/80 p-6 sm:p-7 lg:p-8">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                <div className="relative min-h-[25rem] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={page.heroImage || "/images/services/hero-placeholder.svg"}
                    alt={page.heroTitle}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <article className={`${softCardClass} p-6 sm:p-7`}>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-blush-light text-lg font-semibold text-brand-rose">
                    ?
                  </span>
                  <h3 className="mt-10 text-3xl font-semibold leading-tight tracking-tight text-brand-espresso">
                    {page.heroProblemLabel || "The Problem"}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-brand-espresso/76">
                    {page.heroProblem}
                  </p>
                </article>

                <article className={`${softCardClass} p-6 sm:p-7`}>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blush-light text-lg font-semibold text-brand-rose">
                    ✓
                  </span>
                  <h3 className="mt-10 text-3xl font-semibold leading-tight tracking-tight text-brand-espresso">
                    {page.heroSolutionLabel || "The Solution"}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-brand-espresso/76">
                    {page.heroSolution}
                  </p>
                </article>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── SECTION 2 · THE WHY ──────────────────────────────────────── */}
      <section className={sectionPadding}>
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-10">
              <div className="lg:col-span-5">
                <p className={eyebrowClass}>
                  {page.whyLabel || "The Why"}
                </p>
                <h2 className={`mt-5 ${sectionHeadingClass}`}>
                  {page.whyTitle}
                </h2>
                <div className="mt-8 flex flex-wrap gap-2">
                  {keywordList.map((keyword) => (
                    <span
                      key={keyword}
                      className="inline-flex items-center rounded-full bg-brand-blush-light px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-rose"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 lg:pt-1">
                <p className="text-lg leading-relaxed text-brand-espresso/80 md:text-xl">
                  {page.whyText}
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── SECTION 3 · THE PROTOCOL ─────────────────────────────────── */}
      <section className={`bg-stone-50 ${sectionPadding}`}>
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <p className={eyebrowClass}>
                The Scope
              </p>
              <h2 className={`mt-5 ${sectionHeadingClass} uppercase`}>
                {page.protocolTitle || "The Core Protocol"}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-espresso/75 md:text-lg">
                {page.protocolIntro ||
                  "A sequenced operating system, not a checklist. Each step compounds into the next to build market gravity."}
              </p>
            </div>
          </FadeIn>

          <div
            className={`mt-16 grid grid-cols-1 gap-6 ${protocolGridClass} lg:gap-8`}
          >
            {page.protocol.map((item) => (
              <FadeIn key={item.title}>
                <article className="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-brand-sage/25 bg-white p-8 shadow-[0_16px_36px_-26px_rgba(61,51,42,0.3)] md:p-10">
                  <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-blush-light text-brand-rose">
                    <HiOutlineSparkles className="h-4 w-4" />
                  </span>
                  <h3 className="relative mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-brand-espresso md:text-[1.65rem]">
                    {item.title}
                  </h3>
                  <p className="relative mt-5 text-sm leading-relaxed text-brand-espresso/75 md:text-base">
                    {item.body}
                  </p>
                  {item.keywords ? (
                    <p className="relative mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-rose/85">
                      Focus keywords: {item.keywords}
                    </p>
                  ) : null}
                  {item.points?.length ? (
                    <ul className="relative mt-5 space-y-2.5">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-brand-espresso/78"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-rose"
                            aria-hidden
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SECTION 4 · CORE FOCUS ───────────────────────────────────── */}
      <section className={sectionPadding}>
        <Container>
          <FadeIn>
            <div className="rounded-[2rem] bg-brand-blush-light/65 p-6 shadow-[0_20px_48px_-32px_rgba(61,51,42,0.35)] md:p-8 lg:p-9">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="uppercase font-display text-4xl font-semibold leading-[1.02] tracking-tight text-brand-espresso sm:text-5xl lg:text-6xl">
                    Your path to
                    <br />
                    Pitch Success
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-brand-espresso/72 sm:text-[1.35rem]">
                    Simple workflow, powerful results
                  </p>
                </div>
                <Link
                  href={page.ctaHref}
                  className="inline-flex items-center gap-2 self-start rounded-full bg-brand-rose px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-rose-hover active:scale-[0.98]"
                >
                  Try it Free Now
                  <HiArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {page.specializations.slice(0, 4).map((item, index) => {
                  const Icon = specializationIcons[index] || HiOutlineSparkles;
                  return (
                    <article
                      key={item}
                      className="flex h-full min-h-[15rem] flex-col items-center justify-center rounded-[1.5rem] border border-brand-sage/30 bg-white/60 px-5 py-8 text-center"
                    >
                      <Icon className="h-10 w-10 text-brand-rose" />
                      <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-brand-espresso md:text-[1.65rem]">
                        {item}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-brand-espresso/72 md:text-base">
                        High-impact delivery designed for measurable momentum.
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── SECTION 5 · IMPACT SCOREBOARD ────────────────────────────── */}
      <section className="relative isolate bg-brand-blush-light/30 py-16 text-brand-espresso sm:py-24 md:py-28">
        <GridPattern
          className="absolute inset-0 -z-10 h-full w-full fill-brand-blush/30 stroke-brand-espresso/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
          yOffset={-256}
        />
        <Container>
          <FadeIn>
            <div className="max-w-4xl">
              <p className={eyebrowClass}>
                The Proof
              </p>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-brand-espresso [text-wrap:balance] md:text-4xl lg:text-5xl">
                Impact Scoreboard
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-espresso/75 md:text-lg">
                Receipts over rhetoric. The brands we build compound into
                category authority.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <ServiceProofCarousel items={page.proof} />
          </FadeIn>
        </Container>
      </section>

      {/* ── SECTION 6 · FINAL CALL ───────────────────────────────────── */}
      <section className={sectionPadding}>
        <Container>
          <FadeIn>
            <div className="overflow-hidden rounded-4xl bg-brand-espresso">
              <div className="grid min-h-[min(520px,72vh)] grid-cols-1 items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:py-16 xl:px-16">
                <div className="flex w-full flex-col items-start justify-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blush-light/75">
                    The Final Call
                  </p>
                  <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-white [text-wrap:balance] sm:text-4xl lg:text-[2.35rem] xl:text-5xl">
                    {page.ctaTitle}
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                    {page.ctaBody}
                  </p>
                  <div className="mt-9">
                    <Link
                      href={page.ctaHref}
                      className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-8 py-3.5 text-sm font-semibold text-brand-espresso transition hover:bg-lime-300 active:scale-[0.98]"
                    >
                      {page.ctaLabel}
                      <HiArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="mt-5 text-sm text-brand-blush-light/72">
                    {page.ctaSubtext}
                  </p>
                </div>

                <div className="relative flex w-full min-h-[min(88vw,360px)] items-center justify-center overflow-visible pb-4 pt-2 lg:min-h-0 lg:justify-end lg:pb-0 lg:pt-0">
                  <div className="relative h-[min(78vw,320px)] w-[min(78vw,320px)] shrink-0 sm:h-[min(72vw,380px)] sm:w-[min(72vw,380px)] lg:h-[min(420px,40vw)] lg:w-[min(420px,40vw)] lg:max-w-[420px]">
                    <div className="flex h-full w-full overflow-hidden rounded-full shadow-[0_28px_64px_-16px_rgba(0,0,0,0.45)] ring-2 ring-white/10">
                      <div className="relative h-full w-1/2">
                        <Image
                          src={page.heroImage || "/images/services/hero-placeholder.svg"}
                          alt={page.heroTitle}
                          fill
                          className="object-cover object-left"
                          sizes="(max-width: 1024px) 38vw, 210px"
                        />
                      </div>
                      <div className="h-full w-1/2 bg-lime-400" aria-hidden />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
