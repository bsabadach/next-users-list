import React, { PropsWithChildren } from "react";
import "./globals.css";
import { Header } from "@/layout/Header";
import Providers from "@/app/providers";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
      <Providers>
          <Header />
          <main>{children}</main>
      </Providers>
      </body>
    </html>
  );
}
