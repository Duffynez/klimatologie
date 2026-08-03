import Link from "next/link";

const navigation = [
  { href: "/", label: "Úvod" },
  { href: "/pozorovani", label: "Pozorování" },
  { href: "/metody", label: "Metody" },
  { href: "/mechanismy", label: "Mechanismy" },
  { href: "/projekce", label: "Projekce" },
  { href: "/dusledky", label: "Důsledky" },
  { href: "/historie", label: "Historie" },
  { href: "/osobnosti", label: "Osobnosti" },
  { href: "/zdroje", label: "Zdroje" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="Klimatologie.eu - úvod">
          <span className="brand__mark">K</span>
          <span>Klimatologie.eu</span>
        </Link>
        <nav className="site-nav" aria-label="Hlavní navigace">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
