import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://klimatologie.eu"),
  title: {
    default: "Klimatologie.eu | Data, souvislosti, zdroje",
    template: "%s | Klimatologie.eu",
  },
  description: "Český rozcestník k datům, metodám a původním zdrojům o klimatu.",
  openGraph: {
    title: "Klimatologie.eu",
    description: "Data, souvislosti, zdroje.",
    images: ["/og.png"],
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
      </body>
    </html>
  );
}
