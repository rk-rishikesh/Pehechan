import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import clsx from "clsx";

const SectionIntro = ({
  eyebrow,
  title,
  children,
  smaller = false,
  invert = false,
  ...props
}) => {
  return (
    <Container {...props}>
      <FadeIn className="max-w-2xl">
        <h2>
          {eyebrow && (
            <>
              <span
                className={clsx(
                  "mb-6 block font-display text-base font-semibold",
                  invert ? "text-white" : "text-brand-espresso"
                )}
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              "block font-display tracking-tight [text-wrap:balance]",
              smaller
                ? "text-2xl font-semibold"
                : "text-4xl font-medium sm:text-5xl",
              invert ? "text-white" : "text-brand-espresso"
            )}
          >
            {title}
          </span>
        </h2>
        {children && (
          <div
            className={clsx(
              "mt-6 text-xl",
              invert ? "text-brand-blush-light/80" : "text-brand-espresso/70"
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  );
};

export default SectionIntro;
