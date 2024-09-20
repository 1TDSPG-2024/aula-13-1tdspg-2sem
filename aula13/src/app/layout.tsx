import type { Metadata } from "next";
import Cabecalho from "@/components/Cabecalho/Cabecalho"
import Menu from "@/components/Menu/Menu"
import Rodape from "@/components/Rodape/Rodape"


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const viewport = {
  initialScale: 1.0,
  width: "device-widht",
  colorScheme: "Dark"
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
      <Cabecalho/>
      {children}
      <Menu/>
      <Rodape/> 
      </body>
    </html>
  );
}
