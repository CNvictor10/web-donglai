import type { Metadata } from "next";
import ProductCatalog from "../ProductCatalog";
import { SiteFooter, SiteHeader } from "../SiteChrome";

export const metadata: Metadata = {
  title: "Catálogo | Donglai Importadora",
  description:
    "Explora los productos de ferretería, accesorios y luminarias de Donglai. Busca y filtra por categoría para consultar cada ficha.",
};

export default async function CatalogPage({
  searchParams,
}: PageProps<"/catalogo">) {
  const { line, q } = await searchParams;
  const initialLine =
    line === "ferreteria"
      ? "Ferretería y accesorios"
      : line === "luminarias"
        ? "Luminarias"
        : "Todas";

  return (
    <>
      <SiteHeader />
      <main>
        <section className="catalog catalog-page section-space">
          <ProductCatalog
            initialLine={initialLine}
            initialQuery={typeof q === "string" ? q : ""}
          />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}