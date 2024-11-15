import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>AHIMA Group - Creators of AgriSmart</title>
      <link rel="icon" href="/logo.svg"/>
      <meta name="description" content="We enhance farmers' access to transparent pricing, advanced tools, and skilled labor, fostering confidence and efficiency in the agricultural market. Nous améliorons l'accès des agriculteurs à des prix transparents, des outils modernes et une main-d'œuvre qualifiée, renforçant ainsi la confiance et l'efficacité sur le marché agricole."/>
      <meta name="keywords" content="agriculture, farmers, Morocco, Um6p, transparent pricing, modern tools, skilled labor, agricultural market, efficiency, confidence, agrifood, agricultural technology, farming tools, agritech, AHIMA Group, AgriSmart, farming solutions, modern agriculture, agricultural innovation, agrifood startup" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
