import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import SymbolField from "@/components/SymbolField";
import { siteConfig } from "@/config/site";

// Display face for headings/titles; body face for everything else.
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${ibmPlexSans.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SymbolField />
          <div className="flex flex-row min-h-screen">
            <Navigation />
            {/* ml-20 offsets the desktop sidebar rail; pb-16 offsets the bottom tab bar on mobile */}
            <div className="flex flex-col flex-1 md:ml-20 pb-16 md:pb-0">
              <main className="flex-1">
                {children}
              </main>
              <footer className="border-t border-[var(--border)] py-8 mt-20">
                <div className="max-w-7xl mx-auto px-6 text-center text-sm text-[var(--muted-foreground)]">
                  <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                </div>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
