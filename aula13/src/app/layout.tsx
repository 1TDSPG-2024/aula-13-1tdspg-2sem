import Cabecalho from "@/Components/Cabecalho/Cabecalho";
import Rodape from "@/Components/Rodape/Rodape";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Minha Pagina",
  description: "Generated by create next app",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  colorScheme: 'dark'
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
