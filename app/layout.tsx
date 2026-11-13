import type { Metadata } from "next";
import "katex/dist/katex-swap.min.css";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const slogan = "Klima, které můžete zkoumat sami.";

export const metadata: Metadata = {
  metadataBase: new URL("https://klimatologie.eu"),
  title: {
    default: `Klimatologie.eu | ${slogan}`,
    template: "%s | Klimatologie.eu",
  },
  description: "Český rozcestník k datům, metodám a původním zdrojům o klimatu.",
  openGraph: {
    title: "Klimatologie.eu",
    description: slogan,
    images: [{ url: "/earth-europe.jpg", alt: "Země na snímku NASA Blue Marble" }],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script
          type="module"
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token":"5e5e8b07ed9f445d82e999e0de1c8f65"}'
        />
      </body>
    </html>
  );
}
