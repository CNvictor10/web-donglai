## Donglai website

- Keep user-facing content in Spanish.
- Use the existing Next.js App Router, TypeScript, and CSS conventions.
- Preserve responsive layouts and reduced-motion support.
- Product data comes from `PRECIOS.xlsx` and is represented in `src/data/products.json`; the public catalog must not include prices.
- Preserve product descriptions from the source unless the owner confirms a correction. Flag specification conflicts instead of guessing.
- The owner provided WhatsApp number +51 918 717 771; keep all contact links routed through `src/lib/whatsapp.ts`.
- Run `npm run lint` and `npm run build` after meaningful changes.