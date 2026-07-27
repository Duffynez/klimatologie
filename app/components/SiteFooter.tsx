import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__brand">Klimatologie.eu</p>
          <p>Český rozcestník k datům, metodám a původním zdrojům o klimatu.</p>
        </div>
        <div className="site-footer__links">
          <Link href="/zdroje">Databáze zdrojů</Link>
          <Link href="/metody">Jak pracujeme s daty</Link>
          <Link href="/blog">Zápisník projektu</Link>
        </div>
      </div>
    </footer>
  );
}
