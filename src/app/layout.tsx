import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Donglai | Importadora y abastecimiento",
  description:
    "Conectamos tu negocio con productos y proveedores del mundo. Importación, abastecimiento y acompañamiento cercano.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
