"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import products from "@/data/products.json";
import { getCatalogProducts, type CatalogProduct } from "@/data/catalogProducts";
import { whatsappLink } from "@/lib/whatsapp";

type CatalogLine = "Todas" | "Ferretería y accesorios" | "Luminarias";

const catalogLines: CatalogLine[] = [
  "Todas",
  "Ferretería y accesorios",
  "Luminarias",
];
const pageSize = 12;

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");
}

export default function ProductCatalog({
  initialLine = "Todas",
  initialQuery = "",
}: {
  initialLine?: CatalogLine;
  initialQuery?: string;
}) {
  const [selectedLine, setSelectedLine] = useState<CatalogLine>(initialLine);
  const [selectedCategory, setSelectedCategory] = useState("Todas las categorías");
  const [query, setQuery] = useState(initialQuery);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null);
  const detailsDialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = detailsDialogRef.current;
    if (!dialog) return;

    if (selectedProduct && !dialog.open) dialog.showModal();
    if (!selectedProduct && dialog.open) dialog.close();
  }, [selectedProduct]);

  const availableProducts = products.filter(
    (product) => selectedLine === "Todas" || product.line === selectedLine,
  );
  const categories = Array.from(
    new Set(availableProducts.map((product) => product.category)),
  ).sort((first, second) => first.localeCompare(second, "es"));
  const normalizedQuery = normalize(query.trim());
  const matchingProducts = availableProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "Todas las categorías" ||
      product.category === selectedCategory;
    const matchesQuery =
      !normalizedQuery ||
      normalize(`${product.name} ${product.description} ${product.category}`).includes(
        normalizedQuery,
      );

    return matchesCategory && matchesQuery;
  });
  const matchingIds = new Set(matchingProducts.map((product) => product.id));
  const filteredProducts = getCatalogProducts(availableProducts).filter((product) =>
    product.variants.some((variant) => matchingIds.has(variant.id)),
  );
  const pageCount = Math.ceil(filteredProducts.length / pageSize);
  const visibleProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const firstVisibleProduct = filteredProducts.length
    ? (currentPage - 1) * pageSize + 1
    : 0;
  const lastVisibleProduct = Math.min(currentPage * pageSize, filteredProducts.length);
  const isFiltered =
    selectedLine !== "Todas" ||
    selectedCategory !== "Todas las categorías" ||
    query.length > 0;

  function sendProductInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedProduct) return;

    const formData = new FormData(event.currentTarget);
    const customerName = String(formData.get("customerName") ?? "").trim();
    const customerPhone = String(formData.get("customerPhone") ?? "").trim();
    const customerCity = String(formData.get("customerCity") ?? "").trim();
    const customerAddress = String(formData.get("customerAddress") ?? "").trim();
    const message = [
      `Hola, soy ${customerName}. Quiero consultar disponibilidad y cotización.`,
      `Celular: ${customerPhone}`,
      `Ciudad: ${customerCity}`,
      `Dirección: ${customerAddress || "No indicada"}`,
      `Producto a consultar: ${selectedProduct.name}`,
    ].join("\n");
    const inquiryWindow = window.open(whatsappLink(message), "_blank");

    if (inquiryWindow) inquiryWindow.opener = null;
    else window.location.assign(whatsappLink(message));
  }

  function changeLine(line: CatalogLine) {
    setSelectedLine(line);
    setSelectedCategory("Todas las categorías");
    setCurrentPage(1);
  }

  function clearFilters() {
    setSelectedLine("Todas");
    setSelectedCategory("Todas las categorías");
    setQuery("");
    setCurrentPage(1);
  }

  function renderPagination(position: "top" | "bottom") {
    if (pageCount <= 1) return null;

    return (
      <nav
        aria-label={`Paginación del catálogo, ${position === "top" ? "inicio" : "final"}`}
        className={`catalog-pagination catalog-pagination--${position}`}
      >
        <button
          className="catalog-page-button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((page) => page - 1)}
          type="button"
        >
          <span aria-hidden="true">←</span> Anterior
        </button>
        <span className="catalog-pagination__status" aria-live="polite">
          Página <strong>{currentPage}</strong> de {pageCount}
        </span>
        <button
          className="catalog-page-button"
          disabled={currentPage === pageCount}
          onClick={() => setCurrentPage((page) => page + 1)}
          type="button"
        >
          Siguiente <span aria-hidden="true">→</span>
        </button>
      </nav>
    );
  }

  return (
    <div className="site-width">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span className="eyebrow__line" /> Catálogo de productos
          </p>
          <h2>Encuentra lo que necesitas<span>.</span></h2>
        </div>
        <p className="section-heading__aside">
          Explora nuestras referencias por línea, rubro, nombre o especificación.
          Todos los productos se cotizan por consulta.
        </p>
      </div>

      <div className="catalog-tools">
        <div className="catalog-lines" role="group" aria-label="Filtrar por línea">
          {catalogLines.map((line) => (
            <button
              aria-pressed={selectedLine === line}
              className="catalog-line-button"
              key={line}
              onClick={() => changeLine(line)}
              type="button"
            >
              {line === "Ferretería y accesorios" ? "Ferretería" : line}
            </button>
          ))}
        </div>

        <div className="catalog-controls">
          <label className="catalog-field catalog-field--search">
            <span>Buscar productos</span>
            <input
              onChange={(event) => {
                setQuery(event.target.value);
                setCurrentPage(1);
              }}
              placeholder="Nombre, medida o descripción"
              type="search"
              value={query}
            />
          </label>
          <label className="catalog-field">
            <span>Rubro</span>
            <select
              onChange={(event) => {
                setSelectedCategory(event.target.value);
                setCurrentPage(1);
              }}
              value={selectedCategory}
            >
              <option>Todas las categorías</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          {isFiltered && (
            <button className="catalog-clear" onClick={clearFilters} type="button">
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      <div className="catalog-results" aria-live="polite">
        <span>
          Mostrando <strong>{firstVisibleProduct}–{lastVisibleProduct}</strong> de {filteredProducts.length} referencias
        </span>
        <span>Precios solo por consulta</span>
      </div>
      {renderPagination("top")}

      {filteredProducts.length > 0 ? (
        <ul className="product-grid">
          {visibleProducts.map((product) => {
            const image = product.image;

            return (
              <li key={product.id}>
                <article className="product-card">
                  <div className="product-card__visual">
                    {image ? (
                      <Image
                        alt={product.name}
                        fill
                        sizes="(max-width: 720px) 90vw, (max-width: 1050px) 45vw, 30vw"
                        src={image}
                      />
                    ) : (
                      <span className="product-card__image-placeholder" aria-hidden="true" />
                    )}
                  </div>
                  <h3>{product.name}</h3>
                  <button
                    className="product-card__details"
                    onClick={() => setSelectedProduct(product)}
                    type="button"
                  >
                    Detalles <span aria-hidden="true">↗</span>
                  </button>
                </article>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="catalog-empty" role="status">
          <h3>No encontramos productos con esos filtros.</h3>
          <p>Prueba con otro nombre, medida o rubro.</p>
          <button className="catalog-clear" onClick={clearFilters} type="button">
            Ver todo el catálogo
          </button>
        </div>
      )}
      {renderPagination("bottom")}

      <dialog
        aria-labelledby="product-details-title"
        className="product-details-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        onClose={() => setSelectedProduct(null)}
        ref={detailsDialogRef}
      >
        {selectedProduct && (
          <div className="product-details">
            <button
              aria-label="Cerrar detalles del producto"
              autoFocus
              className="product-details__close"
              onClick={() => detailsDialogRef.current?.close()}
              type="button"
            >
              <span aria-hidden="true">×</span>
            </button>
            <p className="product-card__category">
              <span>{selectedProduct.line}</span>
              <span>{selectedProduct.category}</span>
            </p>
            <h2 id="product-details-title">{selectedProduct.name}</h2>
            <h3>Especificaciones y medidas</h3>
            <p className="product-details__description">{selectedProduct.description}</p>
            <form className="product-inquiry-form" onSubmit={sendProductInquiry}>
              <p className="product-inquiry-form__intro">Déjanos tus datos para atender tu consulta sobre este producto.</p>
              <label>
                Nombre completo
                <input autoComplete="name" maxLength={100} name="customerName" required />
              </label>
              <label>
                Celular o WhatsApp
                <input autoComplete="tel" inputMode="tel" maxLength={24} name="customerPhone" required type="tel" />
              </label>
              <label>
                Ciudad
                <input autoComplete="address-level2" maxLength={100} name="customerCity" required />
              </label>
              <label>
                Dirección de entrega <span>(opcional)</span>
                <input autoComplete="street-address" maxLength={180} name="customerAddress" />
              </label>
              <button className="button button--accent" type="submit">
                Continuar por WhatsApp <span aria-hidden="true">↗</span>
              </button>
              <small>WhatsApp abrirá tu mensaje. Pulsa “Enviar” para que el equipo reciba y registre la consulta.</small>
            </form>
          </div>
        )}
      </dialog>
    </div>
  );
}
