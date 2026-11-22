'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/app/portfolio.module.css';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/posts', label: 'Blog' },
];

export default function SiteHeader() {
  const pathname = usePathname().replace(/\/$/, '') || '/';

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo} aria-label="Seokmin Shin, Home">
          S<span>.</span> Shin
        </Link>
        <nav className={styles.navigation} aria-label="Main navigation">
          {navigation.map(({ href, label }) => {
            const active =
              pathname === href ||
              (href !== '/' && pathname.startsWith(`${href}/`));

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
