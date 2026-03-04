'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data/site';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl font-semibold">Kalman Kop</Link>
        <nav className="hidden gap-4 lg:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className={`text-sm transition ${pathname === href ? 'text-brand-900' : 'text-brand-500 hover:text-brand-900'}`}>
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/stanovi" className="rounded-full bg-brand-900 px-4 py-2 text-sm text-white transition hover:bg-brand-700">Dostupni stanovi</Link>
      </div>
    </header>
  );
}
