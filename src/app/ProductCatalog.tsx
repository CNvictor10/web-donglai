"use client";

import { useState } from "react";
import Image from "next/image";
import products from "@/data/products.json";
import productImages from "@/data/productImages";
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

  const availableProducts = products.filter(
    (product) => selectedLine === "Todas" || product.line === selectedLine,
  );
  const categories = Array.from(
    new Set(availableProducts.map((product) => product.category)),
  ).sort((first, second) => first.localeCompare(second, "es"));
  const normalizedQuery = normalize(query.trim());
  const filteredProducts = availableProducts.filter((product) => {
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
          Mostrando <strong>{firstVisibleProduct}–{lastVisibleProduct}</strong> de {filteredProducts.length} productos
        </span>
        <span>Precios solo por consulta</span>
      </div>
      {renderPagination("top")}

      {filteredProducts.length > 0 ? (
        <ul className="product-grid">
          {visibleProducts.map((product) => {
            const image = productImages[product.id];

            return (
              <li key={product.id}>
                <article className="product-card">
                  {image && (
                    <div className="product-card__visual">
                      <Image
                        alt={product.name}
                        fill
                        sizes="(max-width: 720px) 90vw, (max-width: 1050px) 45vw, 30vw"
                        src={image}
                      />
                    </div>
                  )}
                  <p className="product-card__category">
                    <span>{product.line}</span>
                    <span>{product.category}</span>
                  </p>
                  <h3>{product.name}</h3>
                  <p className="product-card__description">{product.description}</p>
                  <a
                    className="product-card__action"
                    href={whatsappLink(
                      `Hola, quiero consultar disponibilidad y cotización para: ${product.name}.`,
                    )}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Consultar producto <span aria-hidden="true">↗</span>
                  </a>
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
    </div>
  );
}