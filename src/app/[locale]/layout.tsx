import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { Nunito_Sans, Playfair_Display } from "next/font/google";

import { Metadata } from "next";
import { Header } from "@/components";
import Footer from "@/components/Footer/Footer";
import { ProductProvider } from "@/components/Providers/ContextProvider";
import { prisma } from "../../../db";
import { TeaProduct } from "@/types/tea-product.type";
import { ProductCartProvider } from "@/components/Providers/ProductCartProvider";

export const metadata: Metadata = {
  title: "Jasmine Dragon",
  description:
    "A tranquil tea house offering a serene ambiance with premium jasmine teas, handcrafted brews, and a warm, inviting atmosphere for relaxation and rejuvenation.",
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"], // Можно настроить нужные веса
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin", "cyrillic"],
  // style: ["normal", "italic"],
  variable: "--font-nunito-sans",
  weight: ["400", "500", "600", "700"], // Можно настроить нужные веса
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const teas: TeaProduct[] = await prisma.product.findMany();
  return (
    <html lang={locale} className="overflow-x-hidden">
      <body
        className={`${nunitoSans.variable} ${playfairDisplay.variable} contain-paint scroll-smooth bg-green-bg `}
        suppressHydrationWarning
        // className="overflow-x-hidden scroll-smooth"
      >
        <ProductProvider products={teas}>
          <NextIntlClientProvider messages={messages}>
            <ProductCartProvider>
              <Header />
              {children}
              <Footer />
            </ProductCartProvider>
          </NextIntlClientProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
