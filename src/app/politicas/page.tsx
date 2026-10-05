import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../SiteChrome";

export const metadata: Metadata = {
  title: "Políticas de atención y garantías | Donglai",
  description:
    "Información para realizar consultas, solicitar cotizaciones y conocer las condiciones de garantía de los productos Donglai.",
};

const policies = [
  {
    number: "01",
    title: "Atención y consultas",
    paragraphs: [
      "Puedes escribir a cualquiera de los contactos publicados en la sección Contacto o enviar un correo a dingfeng.peru@gmail.com.",
      "Para ayudarte a identificar el producto, incluye su nombre o referencia, la cantidad que buscas y tu ciudad. Si tienes una foto o medida de referencia, también puedes adjuntarla.",
    ],
  },
  {
    number: "02",
    title: "Cotizaciones y disponibilidad",
    paragraphs: [
      "Los precios no se publican en el catálogo. Solicita una cotización indicando el producto y la cantidad requerida.",
      "El precio, la disponibilidad y las condiciones de entrega se confirman directamente para cada consulta antes de concretar el pedido.",
    ],
  },
  {
    number: "03",
    title: "Garantías",
    paragraphs: [
      "La vigencia, cobertura, exclusiones y procedimiento de garantía pueden variar según el producto. Consulta y confirma por escrito las condiciones aplicables a tu referencia antes de comprar.",
      "Si necesitas reportar una incidencia, comunícate con el equipo indicando el producto, la fecha de compra y el problema observado. Adjunta el comprobante y fotos o información que ayuden a revisar el caso.",
      "Cada solicitud se evalúa de acuerdo con las condiciones confirmadas para el producto. No se puede asumir un mismo plazo o cobertura para todo el catálogo.",
    ],
  },
];

export default function PoliciesPage() {
  return (
    <>
      <SiteHeader />
      <main className="policies-page section-space">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow__line" /> Información para nuestros clientes</p>
              <h1>Políticas de atención<br />y garantías<span>.</span></h1>
            </div>
            <p className="section-heading__aside">
              Queremos que tengas información clara antes de consultar y comprar.
              Las condiciones específicas se confirman para cada producto.
            </p>
          </div>
          <div className="policy-list">
            {policies.map((policy) => (
              <article className="policy-item" key={policy.number}>
                <span className="policy-item__number">{policy.number}</span>
                <div>
                  <h2>{policy.title}</h2>
                  {policy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </article>
            ))}
          </div>
          <div className="policies-contact">
            <p>¿Tienes una consulta sobre un producto o una garantía?</p>
            <Link className="button button--accent" href="/#contacto">Contacta a nuestro equipo <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
