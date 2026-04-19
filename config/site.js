export function constructMetadata({
  title = "Pehechan",
  description =
    "Pehechan turns startups into standards — strategy, brand, and growth built for founders who want presence that scales.",
  image = "/agency.png",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL("https://pehechan.com"),
    themeColor: "#54463A",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
