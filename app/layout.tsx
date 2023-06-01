import { ThemeProvider } from "@emotion/react";
import "./globals.css";
import theme from "@/theme";
import { Providers } from "./provider";
import Header from "./components/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <div className="container">
          <Header />
          {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
