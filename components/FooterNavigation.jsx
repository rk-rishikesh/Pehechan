import Link from "next/link";

const FooterNavigation = () => {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <li>
          <div className="font-display text-sm font-semibold tracking-wider text-brand-espresso">
            Work
          </div>
          <ul role="list" className="mt-4 space-y-4 text-sm text-brand-espresso/70">
            <li>
              <Link href="/services/consulting" className="transition hover:text-brand-rose">
                The Blueprint (Consulting)
              </Link>
            </li>
            <li>
              <Link href="/services/digital-marketing" className="transition hover:text-brand-rose">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/services/events" className="transition hover:text-brand-rose">
                Events
              </Link>
            </li>
            <li>
              <Link href="/services/cinema" className="transition hover:text-brand-rose">
                The Cinema (Photo &amp; Video)
              </Link>
            </li>
            <li>
              <Link href="/work" className="transition hover:text-brand-rose">
                Portfolio
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <div className="font-display text-sm font-semibold tracking-wider text-brand-espresso">
            Company
          </div>
          <ul role="list" className="mt-4 space-y-4 text-sm text-brand-espresso/70">
            <li>
              <Link href="/about" className="transition hover:text-brand-rose">
                About Pehechan
              </Link>
            </li>
            <li>
              <Link href="/about#vision-mission" className="transition hover:text-brand-rose">
                Vision &amp; Mission
              </Link>
            </li>
            <li>
              <Link href="/blog" className="transition hover:text-brand-rose">
                Insights / Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-brand-rose">
                Contact
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <div className="font-display text-sm font-semibold tracking-wider text-brand-espresso">
            Connect
          </div>
          <ul role="list" className="mt-4 space-y-4 text-sm text-brand-espresso/70">
            <li>
              <Link
                href="https://www.linkedin.com/in/anjalij29/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-brand-rose"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/_growwithanjali_/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-brand-rose"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <div className="font-display text-sm font-semibold tracking-wider text-brand-espresso">
            Contact
          </div>
          <ul role="list" className="mt-4 space-y-4 text-sm text-brand-espresso/70">
            <li>
              <a
                href="mailto:pehechan29@gmail.com"
                className="transition hover:text-brand-rose"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="tel:+917499598492"
                className="transition hover:text-brand-rose"
              >
                Phone
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavigation;
