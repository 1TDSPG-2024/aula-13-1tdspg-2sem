import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criar Next App",
  description: "Gerado por criar next app",
};

export const viewport = {
  initialScale: 1.0,
  width: "device-width",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
