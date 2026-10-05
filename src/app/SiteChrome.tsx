import Link from "next/link";
import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";

export function SiteHeader() {
  return (
    <>
      <div className="topline">
        <div className="site-width topline__inner">
          <div className="topline__details">
            <span className="topline__item topline__ruc">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3.5h7l4 4v13H7z" /><path d="M14 3.5v4h4M10 12h5M10 16h5" /></svg>
              RUC 20607749940
            </span>
            <a className="topline__item topline__location" href="https://maps.app.goo.gl/P2eGNK8NXm6UL3pt5" rel="noreferrer" target="_blank">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></svg>
              Ver tienda <span aria-hidden="true">↗</span>
            </a>
            <a className="topline__item topline__email" href="mailto:dingfeng.peru@gmail.com">
              <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m4 7 8 6 8-6" /></svg>
              dingfeng.peru@gmail.com
            </a>
          </div>
          <nav className="social-links" aria-label="Redes sociales de Donglai">
            <a aria-label="TikTok de Donglai" href="https://www.tiktok.com/@donglai.import" rel="noreferrer" target="_blank">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M15.7 3c.3 2.1 1.5 3.4 3.6 3.6v3.1a9 9 0 0 1-3.6-1.1v6.7a5.8 5.8 0 1 1-5.8-5.8c.4 0 .8 0 1.2.1v3.2a2.7 2.7 0 1 0 1.5 2.4V3h3.1Z" /></svg>
            </a>
            <a aria-label="Instagram de Donglai" href="https://www.instagram.com/donglaiimport/" rel="noreferrer" target="_blank">
              <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="4" /><circle className="social-icon__dot" cx="17.7" cy="6.7" r="1" /></svg>
            </a>
            <a aria-label="Facebook de Donglai" href="https://www.facebook.com/share/14t1Fg4iFLk/" rel="noreferrer" target="_blank">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 21v-8h2.7l.4-3.1H14V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H8v3.1h2.6v8H14Z" /></svg>
            </a>
          </nav>
        </div>
      </div>
      <header className="site-header">
        <div className="site-width header__inner">
          <Link className="brand" href="/" aria-label="Donglai, inicio">
            <Image
              alt=""
              className="brand__symbol"
              height={655}
              priority
              src="/logo-donglai-symbol.png"
              width={977}
            />
            <Image
              alt=""
              className="brand__wordmark"
              height={305}
              priority
              src="/logo-donglai-wordmark.png"
              width={973}
            />
          </Link>
          <nav className="main-nav" aria-label="Navegación principal">
            <Link href="/">Inicio</Link>
            <Link href="/catalogo">Catálogo</Link>
            <Link href="/#nosotros">Nosotros</Link>
            <Link href="/politicas">Políticas</Link>
            <Link href="/#contacto">Contacto</Link>
          </nav>
          <nav className="mobile-nav" aria-label="Navegación rápida">
            <Link href="/">Inicio</Link>
            <Link href="/catalogo">Catálogo</Link>
            <Link href="/#nosotros">Nosotros</Link>
            <Link href="/politicas">Políticas</Link>
            <Link href="/#contacto">Contacto</Link>
          </nav>
          <form action="/catalogo" className="header-search" role="search">
            <label className="header-search__field">
              <span className="sr-only">Buscar productos en el catálogo</span>
              <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.3 4.3" /></svg>
              <input name="q" placeholder="Buscar productos..." type="search" />
            </label>
            <button aria-label="Buscar" type="submit">
              <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.3 4.3" /></svg>
            </button>
          </form>
        </div>
      </header>
      <a
        aria-label="Consultar a Donglai por WhatsApp"
        className="whatsapp-float"
        href={whatsappLink("Hola, quiero hacer una consulta a Donglai.")}
        rel="noreferrer"
        target="_blank"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <path d="M20 11.5a8 8 0 0 1-11.78 7.05L4 20l1.45-4.05A8 8 0 1 1 20 11.5Z" />
          <path d="M9 8.5c.35-.5.7-.45 1-.1l1 1.55c.2.3.15.55-.1.8l-.6.6c.5 1 1.3 1.8 2.35 2.3l.6-.65c.2-.25.5-.3.8-.1l1.5.9c.35.2.4.6.15.9-.45.65-1.2 1-2 1-2.75-.25-5.9-3.3-6.1-6.05-.05-.5.2-.9.6-1.15Z" />
        </svg>
        <span>Consultar</span>
      </a>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-width footer__main">
        <Link className="brand brand--footer" href="/" aria-label="Donglai, volver al inicio">
          <Image
            alt=""
            className="brand__symbol"
            height={655}
            src="/logo-donglai-symbol.png"
            width={977}
          />
          <Image
            alt=""
            className="brand__wordmark"
            height={305}
            src="/logo-donglai-wordmark.png"
            width={973}
          />
        </Link>
        <p>Abastecimiento global.<br />Relaciones de confianza.</p>
        <a className="footer__contact" href={whatsappLink("Hola, quiero conversar con Donglai.")} target="_blank" rel="noreferrer">Conversemos <span aria-hidden="true">↗</span></a>
        <Link className="footer__policies" href="/politicas">Políticas de atención y garantías</Link>
      </div>
      <div className="site-width footer__bottom">
        <span>© {new Date().getFullYear()} Donglai Importadora</span>
        <span>Hecho para avanzar juntos.</span>
        <Link href="/#inicio">Volver arriba ↑</Link>
      </div>
    </footer>
  );
}