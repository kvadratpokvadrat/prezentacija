import Link from 'next/link';

export function FloatingCTA() {
  return (
    <Link href="/kontakt" className="fixed bottom-5 right-5 z-40 rounded-full bg-accent px-5 py-3 text-sm font-medium text-brand-900 shadow-premium transition hover:scale-[1.02]">
      Pošalji upit
    </Link>
  );
}
