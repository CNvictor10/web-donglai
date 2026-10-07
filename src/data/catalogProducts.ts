import products from "@/data/products.json";
import productCatalogGroups from "@/data/productCatalogGroups";
import { getProductImage } from "@/data/productImages";

export type SourceProduct = (typeof products)[number];
export type CatalogProduct = SourceProduct & {
  image?: string;
  variantIds: string[];
  variants: SourceProduct[];
};

export function getCatalogProducts(items: SourceProduct[] = products): CatalogProduct[] {
  const groupedIds = new Set<string>();
  const cards: CatalogProduct[] = [];

  for (const product of items) {
    if (groupedIds.has(product.id)) continue;

    const group = productCatalogGroups.find((candidate) =>
      candidate.ids.includes(product.id),
    );

    if (!group) {
      cards.push({
        ...product,
        image: getProductImage(product.id),
        variantIds: [product.id],
        variants: [product],
      });
      continue;
    }

    const variants = items.filter((item) => group.ids.includes(item.id));
    group.ids.forEach((id) => groupedIds.add(id));
    const measurements = variants.map((variant) => {
      const label = group.prefix && variant.name.toLocaleLowerCase("es").startsWith(
        group.prefix.toLocaleLowerCase("es"),
      )
        ? variant.name.slice(group.prefix.length).trim()
        : variant.name;

      return label || variant.name;
    });
    const variantIds = variants.map((variant) => variant.id);

    cards.push({
      ...product,
      name: group.title,
      description: `Medidas y variantes disponibles: ${measurements.join(", ")}.`,
      image: variantIds.map((id) => getProductImage(id)).find(Boolean),
      variantIds,
      variants,
    });
  }

  return cards;
}
