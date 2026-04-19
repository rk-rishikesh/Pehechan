import React from "react";
import FadeIn from "./FadeIn";
import Offices from "./Offices";
import Border from "./Border";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

const ContactDetails = () => {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-brand-espresso">
        Our offices
      </h2>
      <p className="mt-6 text-base text-brand-espresso/70">
        Prefer doing things in person? We don&apos;t but we have to list our
        addresses here for legal reasons.
      </p>
      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-brand-espresso">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ["Careers", "reactjsbd.com"],
            ["Press", "noorjsdivs@gmail.com"],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-brand-espresso">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-brand-espresso/60 hover:text-brand-rose"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-brand-espresso">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
};

export default ContactDetails;
