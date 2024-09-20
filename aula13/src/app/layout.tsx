import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criar Next App",
  description: "Gerado por criar next app",
};

export const viewport = {
  initialScale: 1.0,
  width: "device-width",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
