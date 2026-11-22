import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import Analytics from '@/components/Analytics';
import SiteHeader from '@/components/SiteHeader';
import { SITE_DESCRIPTION, SITE_ORIGIN, SITE_TITLE, social } from "@/lib/site";
import styles from './portfolio.module.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: SITE_TITLE,
    template: "%s | Seokmin Shin",
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: "Seokmin Shin" }],
  ...social({ title: SITE_TITLE, description: SITE_DESCRIPTION, path: "/" }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.shell}`}>
        <SiteHeader />
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerLinks}>
              <a href="mailto:seokmin_shin@snu.ac.kr">seokmin_shin@snu.ac.kr</a>
              <a
                href="https://scholar.google.com/citations?user=O_j4EIEAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
            </div>
            <p>© {new Date().getFullYear()} Seokmin Shin</p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
