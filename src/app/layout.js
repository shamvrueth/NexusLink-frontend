import localFont from "next/font/local";
import "./globals.css";

const craftygirls = localFont({
  src: "./fonts/CraftyGirls-Regular.ttf",
  variable: "--craftygirls",
});

export const metadata = {
  title: "Nexus Link",
  description:
    "Website for Nexus Link, a project made during C2C hackathon.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${craftygirls.variable}`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}