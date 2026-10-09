import Link from "next/link";
import { businessContacts } from "@/data/contacts";
import products from "@/data/products.json";
import { whatsappLink } from "@/lib/whatsapp";
import ProductMarquee from "./ProductMarquee";
import { SiteFooter, SiteHeader } from "./SiteChrome";

const lines = [
  {
    title: "Ferretería y accesorios",
    description: "Tiradores, correderas, bisagras, cierres y más soluciones para tus proyectos.",
    query: "ferreteria",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Luminarias",
    description: "Focos, reflectores, paneles y accesorios para distintas necesidades de iluminación.",
    query: "luminarias",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <SiteHeader />

      <section className="hero" id="inicio">
        <div className="site-width hero__grid">
          <div className="hero__copy">
            <p className="eyebrow"><span className="eyebrow__line" /> IMPORTACIONES PARA EL PERÚ</p>
            <h1>Soluciones para<br /><em>cada proyecto.</em></h1>
            <p className="hero__description">
              Herrajes para muebles, accesorios ferreteros y luminarias para distribuidores, contratistas, carpinteros y especialistas.
            </p>
            <div className="hero__actions">
              <Link className="button button--accent" href="/catalogo">Ver catálogo <span aria-hidden="true">↗</span></Link>
              <a className="text-link" href="#nosotros">Conoce nuestra historia <span aria-hidden="true">→</span></a>
            </div>
            <div className="hero__note"><span className="hero__note-dot" /> {products.length} productos · Atención directa</div>
          </div>
          <div className="hero__visual" role="img" aria-label="Logo DONGLAI sobre una escena de importación marítima en un puerto de contenedores" />
          <div className="hero__index" aria-hidden="true">DL — 001</div>
        </div>
      </section>

      <section className="promise-strip" aria-label="Servicios principales">
        <div className="site-width promise-strip__inner">
          <p><span>01</span> {products.filter((product) => product.line === "Ferretería y accesorios").length} productos de ferretería</p>
          <p><span>02</span> {products.filter((product) => product.line === "Luminarias").length} productos de luminaria</p>
          <p><span>03</span> Fichas organizadas por rubro</p>
          <p><span>04</span> Precios por consulta</p>
        </div>
      </section>

      <ProductMarquee />

      <section className="catalog-preview section-space" id="catalogo">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow__line" /> Catálogo DONGLAI</p>
              <h2>Dos líneas para explorar<span>.</span></h2>
            </div>
            <p className="section-heading__aside">Consulta las fichas de producto, busca por nombre o especificación y filtra por rubro en el catálogo completo.</p>
          </div>
          <div className="line-preview-grid">
            {lines.map((line) => {
              const count = products.filter((product) =>
                line.query === "luminarias"
                  ? product.line === "Luminarias"
                  : product.line !== "Luminarias",
              ).length;

              return (
                <Link
                  className="line-preview"
                  href={`/catalogo?line=${line.query}`}
                  key={line.query}
                  style={{ backgroundImage: `linear-gradient(90deg, rgba(6, 71, 78, 0.9), rgba(6, 71, 78, 0.2)), url("${line.image}")` }}
                >
                  <span className="line-preview__count">{count} PRODUCTOS</span>
                  <span className="line-preview__content">
                    <strong>{line.title}</strong>
                    <span>{line.description}</span>
                    <span className="line-preview__link">Ver productos <span aria-hidden="true">↗</span></span>
                  </span>
                </Link>
              );
            })}
          </div>
          <p className="catalog__disclaimer">Catálogo sin precios públicos. Solicita disponibilidad y cotización.</p>
        </div>
      </section>

      <section className="about section-space" id="nosotros">
        <div className="site-width about__grid">
          <div className="about__visual">
            <div className="about__visual-image" role="img" aria-label="Contenedores de carga en un puerto internacional" />
            <span className="about__visual-caption">Conectamos oportunidades.</span>
            <span className="about__visual-index">D / ORIGEN</span>
          </div>
          <div className="about__copy">
            <p className="eyebrow"><span className="eyebrow__line" /> Familia Donglai</p>
            <h2>Abastecimiento que impulsa<br />cada proyecto.</h2>
            <div className="about__text">
              <p><strong>DONGLAI</strong> conecta fabricantes internacionales con el mercado peruano. Desde Villa El Salvador, Lima, acercamos soluciones para ferretería, carpintería, construcción e iluminación.</p>
              <p>Acompañamos a distribuidores, contratistas y especialistas con un catálogo organizado y atención directa para encontrar productos, revisar especificaciones y solicitar cotizaciones.</p>
            </div>
            <div className="about__highlights" aria-label="DONGLAI en cifras">
              <div><strong>{products.length}</strong><span>productos para explorar</span></div>
              <div><strong>2</strong><span>líneas de productos</span></div>
              <div><strong>Lima</strong><span>atención desde Villa El Salvador</span></div>
            </div>
            <Link className="text-link text-link--dark" href="/catalogo">Explorar el catálogo <span aria-hidden="true">→</span></Link>
            <div className="about__signature"><span className="about__signature-line" /><span>{products.length} productos organizados por rubro</span></div>
          </div>
        </div>
      </section>

      <section className="process section-space" id="proceso">
        <div className="site-width">
          <div className="process__intro">
            <div>
              <p className="eyebrow"><span className="eyebrow__line" /> Consulta fácil, sin perder tiempo</p>
              <h2>Encuentra y consulta<span>.</span></h2>
            </div>
            <p>Usa el catálogo para localizar una referencia y consultar su disponibilidad.</p>
          </div>
          <div className="process__steps">
            <article className="process-step">
              <span className="process-step__number">01</span>
              <h3>Elige una línea</h3>
              <p>Explora ferretería y accesorios o revisa la línea de luminarias.</p>
            </article>
            <article className="process-step">
              <span className="process-step__number">02</span>
              <h3>Filtra o busca</h3>
              <p>Encuentra productos por nombre, medida, descripción o rubro.</p>
            </article>
            <article className="process-step">
              <span className="process-step__number">03</span>
              <h3>Consulta el producto</h3>
              <p>Solicita información y precio para la referencia que necesitas.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="site-width contact__inner">
          <div className="contact__intro">
            <p className="eyebrow eyebrow--light"><span className="eyebrow__line" /> Hablemos de tu próximo proyecto</p>
            <h2>Contacta a nuestro equipo<span>.</span></h2>
            <p>Elige a quién escribirle y envía tu consulta directamente por WhatsApp.</p>
          </div>
          <ul className="contact-list">
            {businessContacts.map((contact) => (
              <li className="contact-person" key={contact.name}>
                <h3>{contact.name}</h3>
                <div className="contact-person__numbers">
                  {contact.numbers.map((number) => (
                    <a
                      aria-label={`Escribir a ${contact.name} al ${number.label} por WhatsApp`}
                      href={whatsappLink(`Hola ${contact.name}, quiero hacer una consulta a Donglai.`, number.international)}
                      key={number.international}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span aria-hidden="true">WhatsApp</span> {number.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className="contact__policy-link">
            <span>Consulta nuestras políticas de atención y garantías.</span>
            <Link href="/politicas">Ver políticas <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
