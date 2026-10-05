import Link from "next/link";
import products from "@/data/products.json";

type Product = (typeof products)[number];

function ProductTrack({
  label,
  items,
  reverse = false,
}: {
  label: string;
  items: Product[];
  reverse?: boolean;
}) {
  const duration = Math.max(440, Math.round(items.length * 4.5));

  return (
    <div className={`product-marquee__lane${reverse ? " product-marquee__lane--reverse" : ""}`}>
      <div
        className="product-marquee__track"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <ul
            aria-hidden={copy === 1 ? true : undefined}
            className="product-marquee__group"
            key={`${label}-${copy}`}
          >
            {items.map((product) => (
              <li className="product-marquee__item" key={`${copy}-${product.id}`}>
                {copy === 0 ? (
                  <Link
                    aria-label={`${product.name}, ${product.category}. Ver en el catálogo.`}
                    href={`/catalogo?q=${encodeURIComponent(product.name)}`}
                  >
                    <span>{label}</span>
                    <strong>{product.name}</strong>
                    <small>{product.category}</small>
                  </Link>
                ) : (
                  <div>
                    <span>{label}</span>
                    <strong>{product.name}</strong>
                    <small>{product.category}</small>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function ProductMarquee() {
  const hardwareProducts = products.filter(
    (product) => product.line === "Ferretería y accesorios",
  );
  const lightingProducts = products.filter(
    (product) => product.line === "Luminarias",
  );

  return (
    <section className="product-marquee" aria-labelledby="product-marquee-title">
      <div className="site-width product-marquee__heading">
        <div>
          <p className="eyebrow"><span className="eyebrow__line" /> Del catálogo</p>
          <h2 id="product-marquee-title">Un vistazo a nuestros productos<span>.</span></h2>
        </div>
        <Link href="/catalogo" className="text-link">
          Ver catálogo completo <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="product-marquee__lanes">
        <ProductTrack label="Ferretería y accesorios" items={hardwareProducts} />
        <ProductTrack label="Luminarias" items={lightingProducts} reverse />
      </div>
      <p className="site-width product-marquee__note">
        {products.length} productos en movimiento lento · Selecciona una ficha para verla en el catálogo
      </p>
    </section>
  );
}
