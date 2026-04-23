import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import { servicePages, serviceSlugs } from "@/constants/servicePages";
import { HiArrowRight } from "react-icons/hi2";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = servicePages[params.slug];
  if (!page) return {};
  return {
    title: `${page.navTitle} | Pehechan`,
    description: page.heroSubtitle,
  };
}

export default function ServiceDetailPage({ params }) {
  const page = servicePages[params.slug];
  if (!page) notFound();

  const keywordList = page.whyKeywords
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
  const protocolGridClass =
    page.protocol.length >= 4 ? "lg:grid-cols-2" : "lg:grid-cols-3";

  return (
    <main className="bg-white text-brand-espresso">
      {/* ── SECTION 1 · HERO ─────────────────────────────────────────── */}
      <section className="border-b border-brand-sage/20">
        <div className="grid min-h-[100dvh] grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col justify-center bg-brand-espresso px-6 py-16 text-white sm:px-10 lg:px-14 lg:py-24 xl:px-20">
            <FadeIn>
              <div className="flex items-center gap-2.5">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-sm bg-brand-rose"
                  aria-hidden
                />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blush-light/85">
                  {page.heroLabel}
                </span>
              </div>
              <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.02] tracking-tight text-white [text-wrap:balance] sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
                {page.heroTitle}
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-brand-blush-light/90 md:text-xl">
                {page.heroSubtitle}
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link
                  href={page.ctaHref}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-rose px-7 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-brand-rose-hover active:scale-[0.98]"
                >
                  {page.ctaLabel}
                  <HiArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex rounded-full border border-brand-blush-light/40 px-7 py-3 text-xs font-semibold uppercase tracking-wide text-brand-blush-light transition hover:bg-white/5 active:scale-[0.98]"
                >
                  See the Proof
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="flex flex-col justify-center bg-stone-50 px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
            <FadeIn>
              <div className="flex flex-col gap-6">
                <article className="rounded-[1.6rem] bg-brand-rose px-7 py-8 text-white shadow-[0_18px_40px_-24px_rgba(61,51,42,0.45)] md:px-8 md:py-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                    {page.heroProblemLabel || "The Problem"}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-white/95 md:text-lg">
                    {page.heroProblem}
                  </p>
                </article>

                <article className="rounded-[1.6rem] bg-brand-espresso px-7 py-8 text-brand-blush-light shadow-[0_18px_40px_-24px_rgba(61,51,42,0.55)] md:px-8 md:py-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blush-light/75">
                    {page.heroSolutionLabel || "The Solution"}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-brand-blush-light/92 md:text-lg">
                    {page.heroSolution}
                  </p>
                </article>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 · THE WHY ──────────────────────────────────────── */}
      <section className="flex min-h-screen items-center bg-white py-20 md:py-28 lg:py-32">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-10">
              <div className="lg:col-span-5">
                <p className="font-display text-sm font-semibold tracking-wide text-brand-rose">
                  {page.whyLabel || "The Why"}
                </p>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-brand-espresso [text-wrap:balance] md:text-4xl lg:text-5xl">
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
      <section className="flex min-h-screen items-center bg-stone-50 py-20 md:py-28 lg:py-32">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <p className="font-display text-sm font-semibold tracking-wide text-brand-rose">
                The Scope
              </p>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-brand-espresso [text-wrap:balance] md:text-4xl lg:text-5xl">
                {page.protocolTitle || "The Core Protocol"}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-espresso/75 md:text-lg">
                {page.protocolIntro ||
                  "A sequenced operating system, not a checklist. Each step compounds into the next to build market gravity."}
              </p>
            </div>
          </FadeIn>

          <div className={`mt-16 grid grid-cols-1 gap-6 ${protocolGridClass} lg:gap-8`}>
            {page.protocol.map((item) => (
              <FadeIn key={item.title}>
                <article className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-brand-sage/25 bg-white p-8 shadow-[0_18px_40px_-28px_rgba(61,51,42,0.35)] md:p-10">
                  <span
                    className="pointer-events-none absolute -right-4 -top-6 select-none font-display text-[7rem] font-semibold leading-none text-brand-blush-light/55"
                    aria-hidden
                  >
                    {item.step}
                  </span>
                  <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-brand-rose">
                    Step {item.step}
                  </p>
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
      <section className="flex min-h-screen items-center bg-white py-20 md:py-28 lg:py-32">
        <Container>
          <FadeIn>
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-display text-sm font-semibold tracking-wide text-brand-rose">
                  The Specializations
                </p>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-brand-espresso [text-wrap:balance] md:text-4xl lg:text-5xl">
                  Core Focus
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-brand-espresso/70 md:text-base">
                Where we concentrate force. Every specialization is engineered to
                move the needle on positioning, revenue, or authority.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {page.specializations.map((item, index) => {
              const isDark = index % 2 === 1;
              return (
                <FadeIn key={item}>
                  <article
                    className={
                      isDark
                        ? "group relative flex h-full items-start justify-between gap-6 overflow-hidden rounded-[1.6rem] bg-brand-espresso p-8 text-brand-blush-light shadow-[0_18px_40px_-24px_rgba(61,51,42,0.55)] md:p-10"
                        : "group relative flex h-full items-start justify-between gap-6 overflow-hidden rounded-[1.6rem] border border-brand-sage/25 bg-brand-blush-light/35 p-8 text-brand-espresso shadow-[0_18px_40px_-28px_rgba(61,51,42,0.25)] md:p-10"
                    }
                  >
                    <div>
                      <p
                        className={
                          isDark
                            ? "font-mono text-xs font-semibold tracking-[0.16em] text-brand-blush-light/70"
                            : "font-mono text-xs font-semibold tracking-[0.16em] text-brand-rose"
                        }
                      >
                        0{index + 1}
                      </p>
                      <h3
                        className={
                          isDark
                            ? "mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl"
                            : "mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-brand-espresso md:text-3xl"
                        }
                      >
                        {item}
                      </h3>
                    </div>
                    <HiArrowRight
                      className={
                        isDark
                          ? "mt-2 h-5 w-5 shrink-0 text-brand-blush-light/70 transition-transform group-hover:translate-x-1"
                          : "mt-2 h-5 w-5 shrink-0 text-brand-rose transition-transform group-hover:translate-x-1"
                      }
                    />
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── SECTION 5 · IMPACT SCOREBOARD ────────────────────────────── */}
      <section className="flex min-h-screen items-center bg-brand-espresso py-20 text-brand-blush-light md:py-28 lg:py-32">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <p className="font-display text-sm font-semibold tracking-wide text-brand-rose">
                The Proof
              </p>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-white [text-wrap:balance] md:text-4xl lg:text-5xl">
                Impact Scoreboard
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-blush-light/80 md:text-lg">
                Receipts over rhetoric. The brands we build compound into
                category authority.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-7">
            {page.proof.map((item, index) => (
              <FadeIn key={item}>
                <article className="relative flex h-full flex-col rounded-[1.4rem] border border-brand-blush-light/15 bg-brand-espresso-light/35 p-7 md:p-8">
                  <p className="font-mono text-xs font-semibold tracking-[0.18em] text-brand-rose">
                    Case 0{index + 1}
                  </p>
                  <div className="mt-5 h-px w-10 bg-brand-blush-light/35" />
                  <p className="mt-5 text-sm leading-relaxed text-brand-blush-light/90 md:text-base">
                    {item}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SECTION 6 · FINAL CALL ───────────────────────────────────── */}
      <section className="flex min-h-[90vh] items-center bg-white py-20 md:py-28 lg:py-32">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-espresso px-8 py-14 text-brand-blush-light shadow-[0_24px_60px_-28px_rgba(61,51,42,0.6)] md:px-14 md:py-20 lg:px-20 lg:py-24">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-rose/30 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-brand-sage/30 blur-3xl"
                aria-hidden
              />
              <div className="relative max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blush-light/75">
                  The Final Call
                </p>
                <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-white [text-wrap:balance] md:text-5xl lg:text-6xl">
                  {page.ctaTitle}
                </h2>
                <p className="mt-7 max-w-2xl text-base leading-relaxed text-brand-blush-light/88 md:text-lg">
                  {page.ctaBody}
                </p>
                <Link
                  href={page.ctaHref}
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-rose px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-rose-hover active:scale-[0.98]"
                >
                  {page.ctaLabel}
                  <HiArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-5 text-sm text-brand-blush-light/72">
                  {page.ctaSubtext}
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
