import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-y-14">
          <FooterNavigation />
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-rose/85">
              The Closing Statement
            </p>
            <p className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-brand-espresso sm:text-4xl">
              We don&apos;t build brands.
              <br />
              We build names the world remembers.
            </p>
          </div>
        </div>
        <div className="mb-20 mt-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-brand-espresso/10 pt-10">
          <Link href={"/"} aria-label="Home">
            <Logo className="h-8" fillOnHover>
              Pehechan
            </Logo>
          </Link>
          <div className="space-y-1 text-right text-sm text-brand-espresso/60">
            <p>© 2026 Pehechan. All rights reserved.</p>
            <p>Built for founders who choose dominance over existence.</p>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
