"use client";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import Footer from "./Footer";

const Header = ({ invert = false }) => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
        <Link href="/" aria-label="Home" className="flex items-center gap-2.5">
          <Image src="/PehechanLogo.svg" alt="Pehechan" width={230} height={230} />
        </Link>

        <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 font-display">
          <Link
            href="/#about"
            className={clsx(
              "text-[0.8rem] font-medium uppercase tracking-[0.16em] transition",
              invert
                ? "text-white hover:text-brand-blush-light"
                : "text-brand-espresso hover:text-brand-espresso-light"
            )}
          >
            About us
          </Link>
          <Link
            href="/#the-arsenal"
            className={clsx(
              "text-[0.8rem] font-medium uppercase tracking-[0.16em] transition",
              invert
                ? "text-white hover:text-brand-blush-light"
                : "text-brand-espresso hover:text-brand-espresso-light"
            )}
          >
            Services
          </Link>
          <Link
            href="/#portfolio"
            className={clsx(
              "text-[0.8rem] font-medium uppercase tracking-[0.16em] transition",
              invert
                ? "text-white hover:text-brand-blush-light"
                : "text-brand-espresso hover:text-brand-espresso-light"
            )}
          >
            Case studies
          </Link>
          <Link
            href="https://calendar.app.google/EUTGdxUZkbBtd7Ct6"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "text-[0.8rem] font-medium uppercase tracking-[0.16em] transition",
              invert
                ? "text-white hover:text-brand-blush-light"
                : "text-brand-espresso hover:text-brand-espresso-light"
            )}
          >
            Contact us
          </Link>
        </nav>
      </div>
    </Container>
  );
};

const RootLayoutInner = ({ children }) => {
  return (
    <>
      <header>
        <div className="absolute left-0 right-0 top-2 z-40 pt-8">
          <Header />
        </div>
      </header>
      <div
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <div className="relative isolate flex w-full flex-col pt-9">
          <main className="w-full flex-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

const RootLayout = ({ children }) => {
  const pathName = usePathname();
  return <RootLayoutInner key={pathName}>{children}</RootLayoutInner>;
};

export default RootLayout;
