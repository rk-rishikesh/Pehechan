import clsx from "clsx";
import Link from "next/link";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { HiOutlineChevronRight } from "react-icons/hi2";

// ─── donut chart math (runs at build time) ────────────────────────────
const CX = 250, CY = 250, R = 152, SW = 62;
const C = 2 * Math.PI * R;
const GAP = 28;
const USABLE = C - 3 * GAP;
const Q = C / 4;
const VB_X = -50, VB_Y = -50, VB_W = 600, VB_H = 600;
/** Icon + tooltip group anchored here — outer rim of stroke + clearance */
const ICON_R_DIST = R + SW / 2 + 22;
const TOTAL_PCT = 289;

function toPct(svgVal, offset, span) {
  return +((svgVal - offset) / span * 100).toFixed(2);
}

/** placement: tooltip relative to icon — right / below / left */
const SEG_DEFS = [
  { pct: 98, color: "#C75F71", label: "Client Retention", placement: "right" },
  { pct: 92, color: "#A2AE9D", label: "Lead Conversion", placement: "below" },
  { pct: 99, color: "#F2C7C7", label: "Brand Authority", placement: "left" },
];

let _cum = 0;
const SEGS = SEG_DEFS.map(def => {
  const len   = USABLE * def.pct / TOTAL_PCT;
  const start = _cum;
  _cum += len + GAP;
  const mid = start + len / 2;
  const rad = (mid / C) * 2 * Math.PI;
  const doff = (() => { const v = Q - start; return v < 0 ? C + v : v; })();
  const ix = CX + ICON_R_DIST * Math.sin(rad);
  const iy = CY - ICON_R_DIST * Math.cos(rad);
  return {
    ...def, len, doff, rad,
    dasharray: `${len.toFixed(2)} ${(C - len).toFixed(2)}`,
    iconLeftPct: toPct(ix, VB_X, VB_W),
    iconTopPct: toPct(iy, VB_Y, VB_H),
  };
});

// ─── icon paths (inline SVG) ──────────────────────────────────────────
const ICONS = [
  // person
  "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z",
  // trending-up arrow
  "M3.5 17.5 9 11.5l4 4L20.5 7M14 7h6.5V13.5",
  // star
  "M12 2.4l2.7 5.5 6.1.9-4.4 4.3 1.04 6.1L12 16.3l-5.44 2.9 1.04-6.1L3.2 8.8l6.1-.9L12 2.4z",
];

// ─── stat data ────────────────────────────────────────────────────────
const STATS = [
  { value: "98%", label: "Client Retention Rate",    color: "text-brand-rose" },
  { value: "92%", label: "Lead Conversion Success",   color: "text-brand-espresso" },
  { value: "99%", label: "Brand Authority Growth",    color: "text-brand-espresso" },
];

const HomeGrowthScoreboard = () => (
  <section className="overflow-hidden bg-stone-50 py-20 md:py-28 lg:py-32">
    <Container>
      <FadeIn>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">

          {/* ── LEFT: copy + stats grid ── */}
          <div className="lg:col-span-5 xl:col-span-4">
            <span className="inline-flex items-center rounded-full bg-brand-blush-light px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-rose">
              The Growth Scoreboard
            </span>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-brand-espresso [text-wrap:balance] sm:text-5xl lg:text-[2.6rem] xl:text-5xl">
              WHY WE ARE THE POWERHOUSE
            </h2>

            {/* 1 × 3 stats (vertical) */}
            <div className="mt-10 flex flex-col gap-9">
              {STATS.map(s => (
                <div key={s.label}>
                  <p className={`font-mono text-4xl font-semibold tabular-nums tracking-tight ${s.color} sm:text-[2.5rem]`}>
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-brand-espresso/65">
                    {s.label}
                  </p>
                </div>
              ))}

              {/* arrow + projection note */}
              <div className="flex flex-col justify-start">
                <Link
                  href="/contact"
                  className="group flex items-start gap-2 text-sm font-medium text-brand-espresso/80 transition hover:text-brand-rose"
                >
                  <HiOutlineChevronRight
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-rose transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                  <span className="text-xs leading-relaxed text-brand-espresso/70">
                    We engineer results, not guesses. Built for one thing:
                    Absolute Scaling.
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ── RIGHT: donut chart — flush to column end */}
          <div className="flex w-full justify-end lg:col-span-7 xl:col-span-8">
            <div className="relative ml-auto w-full max-w-[min(100%,28rem)] lg:max-w-[min(100%,36rem)] xl:max-w-[min(100%,40rem)]">
              {/* soft gradient blob behind chart */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_92%_92%_at_52%_48%,rgba(242,199,199,0.34)_0%,rgba(230,236,231,0.22)_38%,rgba(213,243,216,0.14)_55%,rgba(250,250,249,0.55)_78%,rgb(250_250_249)_92%,rgb(250_250_249)_100%)]"
                aria-hidden
              />
              <svg
                viewBox={`${VB_X} ${VB_Y} ${VB_W} ${VB_H}`}
                className="aspect-square w-full"
                preserveAspectRatio="xMidYMid meet"
                aria-label="Growth metrics donut chart"
                role="img"
              >
                {/* outer ghost ring */}
                <circle
                  cx={CX} cy={CY} r={R + SW / 2 + 18}
                  fill="none"
                  stroke="#A2AE9D"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                />

                {/* donut segments */}
                {SEGS.map(seg => (
                  <circle
                    key={seg.label}
                    cx={CX} cy={CY} r={R}
                    fill="none"
                    stroke={seg.color}
                    strokeWidth={SW}
                    strokeDasharray={seg.dasharray}
                    strokeDashoffset={seg.doff.toFixed(2)}
                    strokeLinecap="round"
                  />
                ))}

                {/* inner white circle (hole) */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={R - SW / 2 - 2}
                  fill="rgb(250 250 249)"
                  fillOpacity="0.94"
                />
              </svg>

              {/* Icon on rim; tooltip placement per segment (right / below / left of icon) */}
              {SEGS.map((seg, i) => {
                const tooltip = (
                  <span
                    className={clsx(
                      "flex h-11 min-w-[11.5rem] max-w-[13rem] shrink-0 items-center justify-center rounded-xl bg-white/95 px-3.5 py-2.5 text-center text-[0.6875rem] font-semibold leading-snug text-brand-espresso shadow-[0_3px_14px_-5px_rgba(61,51,42,0.18)] sm:h-12 sm:text-xs"
                    )}
                  >
                    <span className="line-clamp-2 [text-wrap:balance]">{seg.label}</span>
                  </span>
                );

                const icon = (
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-espresso-dark shadow-[0_4px_14px_-4px_rgba(61,51,42,0.35)] sm:h-12 sm:w-12">
                    <svg viewBox="0 0 24 24" className="h-[1.15rem] w-[1.15rem] fill-white sm:h-5 sm:w-5" aria-hidden>
                      <path d={ICONS[i]} />
                    </svg>
                  </span>
                );

                return (
                  <div
                    key={`seg-${seg.label}`}
                    className="pointer-events-none absolute z-[2]"
                    style={{
                      left: `${seg.iconLeftPct}%`,
                      top: `${seg.iconTopPct}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className={clsx(
                        "flex",
                        seg.placement === "below"
                          ? "flex-col items-center gap-3 mt-2"
                          : "flex-row items-center gap-3"
                      )}
                    >
                      {seg.placement === "left" ? (
                        <div className="mr-2">
                          {/* {tooltip} */}
                          {icon}
                        </div>
                      ) : (
                        <div className="ml-3">
                          {icon}
                          {/* {tooltip} */}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </FadeIn>
    </Container>
  </section>
);

export default HomeGrowthScoreboard;
