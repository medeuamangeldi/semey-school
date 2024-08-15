import type { Metadata } from "next";
import "./globals.scss";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Suspense } from "react";
import ReduxProvider from "../_store/redux-provider";
import Menu from "./_components/Menu/menu.component";
import { ParallaxProvider } from "react-scroll-parallax";

export const metadata: Metadata = {
  title: "Semey New School",
  description: "Semey New School",
};

export default function RootLayout({ children, params: { locale } }: any) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <ReduxProvider>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <body>
            <Menu>
              <Suspense>{children}</Suspense>
            </Menu>
          </body>
        </NextIntlClientProvider>
      </ReduxProvider>
    </html>
  );
}
