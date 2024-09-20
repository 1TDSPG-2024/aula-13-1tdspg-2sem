import Menu from "@/componentes/Menu/Menu";
import Cabecalho from "@/componentes/cabecalho/Cabecalho";
import Rodape from "@/componentes/rodape/Rodape";
import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export const viewport = {

  initialScale: 1.0,
  width: "device-width",
  colorScheme: "dark"

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR                                                                                                       '">
      <body>
        <Cabecalho />
        <Menu />
        <Rodape />
        {children}


      </body>
    </html>
  );
}
