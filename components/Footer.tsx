import Link from 'next/link';
import { navItems } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white">
      <div className="section grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-semibold">Reljkovićeva 59</h3>
          <p className="mt-2 text-sm text-brand-500">Premium stanovi u Novom Sadu. Investitor: Kalman Kop.</p>
        </div>
        <div>
          <h4 className="font-medium">Brzi linkovi</h4>
          <ul className="mt-3 space-y-2 text-sm text-brand-500">
            {navItems.slice(0, 6).map(([label, href]) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-brand-500">
          <h4 className="font-medium text-brand-900">Kontakt</h4>
          <p className="mt-2">+381 60 000 000</p>
          <p>prodaja@kalmankop.rs</p>
          <p>Reljkovićeva 59, Novi Sad</p>
          <p className="mt-4">© Kalman Kop</p>
        </div>
      </div>
    </footer>
  );
}
