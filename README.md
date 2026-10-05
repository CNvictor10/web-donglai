# Donglai Importadora

Sitio web en español para presentar los servicios de importación y recibir consultas de cotización. Construido con Next.js, TypeScript y Tailwind CSS.

La página principal presenta las dos líneas de productos. El catálogo completo está en `/catalogo`, con búsqueda por nombre o descripción y filtros por línea y rubro. Los accesos desde la portada abren el catálogo en la línea elegida.

El encabezado muestra el RUC, correo, enlace a la tienda, redes sociales, navegación y búsqueda directa del catálogo. Las políticas de atención y garantías están en `/politicas`.

## Ejecutar en desarrollo

```bash
npm run dev
```

Abre `http://localhost:3000` en el navegador.

## Personalizar

- Edita `src/app/page.tsx` para actualizar el contenido general de la web.
- Edita `src/data/contacts.ts` para cambiar las personas de contacto y sus teléfonos.
- Edita `src/app/politicas/page.tsx` para revisar las políticas de atención, cotización y garantías.
- Edita `src/app/catalogo/page.tsx` para ajustar el título y la entrada al catálogo.
- Edita `src/app/ProductCatalog.tsx` para cambiar la búsqueda, los filtros y las fichas de producto.
- El número de WhatsApp configurado es +51 918 717 771. Para cambiarlo, edita `src/lib/whatsapp.ts`; el botón flotante, las cotizaciones y las consultas de cada producto comparten ese destino.
- Actualiza `src/data/products.json` con las referencias del catálogo. El archivo se creó desde `PRECIOS.xlsx` y contiene 269 productos organizados por línea y rubro, con nombre y descripción; no incluye precios.
- Guarda las fotos de producto en `public/productos/` y agrega su ruta por ID en `src/data/productImages.ts`. La foto de ejemplo `lum-111` corresponde a Luz De Emergencia Faro 20W.
- Edita `src/app/globals.css` para ajustar colores, tipografía y diseño responsive.
- El logotipo original está en `public/logo.png`; el símbolo y el nombre en formato horizontal usados juntos en cabecera y pie están en `public/logo-donglai-symbol.png` y `public/logo-donglai-wordmark.png`.
- Edita `src/app/layout.tsx` para cambiar el título y la descripción que aparecen en buscadores.
- Antes de publicar, confirma la ficha de la fila 12 de `LUMINARIAS`: el nombre indica 160 W y la descripción indica 180 W.

## Comprobaciones

```bash
npm run lint
npm run build
```
