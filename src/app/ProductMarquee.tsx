import Link from "next/link";
import Image from "next/image";
import { getCatalogProducts, type CatalogProduct } from "@/data/catalogProducts";

function ProductTrack({
  label,
  items,
  reverse = false,
}: {
  label: string;
  items: CatalogProduct[];
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
            {items.map((product) => {
              const content = (
                <>
                  <span className="product-marquee__thumb" aria-hidden="true">
                    {product.image && (
                      <Image
                        alt=""
                        className="product-marquee__image"
                        height={64}
                        src={product.image}
                        width={64}
                      />
                    )}
                  </span>
                  <span className="product-marquee__item-copy">
                    <span>{label}</span>
                    <strong>{product.name}</strong>
                    <small>{product.category}</small>
                  </span>
                </>
              );

              return (
                <li className="product-marquee__item" key={`${copy}-${product.id}`}>
                  {copy === 0 ? (
                    <Link
                      aria-label={`${product.name}, ${product.category}. Ver en el catálogo.`}
                      href={`/catalogo?q=${encodeURIComponent(product.variants[0]?.name ?? product.name)}`}
                    >
                      {content}
                    </Link>
                  ) : (
                    <div>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function ProductMarquee() {
  const catalogProducts = getCatalogProducts();
  const hardwareProducts = catalogProducts.filter(
    (product) => product.line === "Ferretería y accesorios",
  );
  const lightingProducts = catalogProducts.filter(
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
        {catalogProducts.length} productos en movimiento lento · Selecciona una ficha para verla en el catálogo
      </p>
    </section>
  );
}
