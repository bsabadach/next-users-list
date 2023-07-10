import React, {PropsWithChildren} from "react";
import "./globals.css";
import { Header } from "@/layout/Header";

export default function RootLayout({ children }:PropsWithChildren) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
