import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Presek zgrade', description: 'Tehnički presek zgrade sa ključnim slojevima konstrukcije i FAQ sekcijom.' };

const items = ['Izolacija', 'Ploče', 'Zidovi', 'Instalacije', 'Zvučna izolacija', 'Hidroizolacija'];

export default function PresekPage() {
  return (
    <section className="section space-y-6">
      <h1 className="font-display text-4xl">Presek zgrade</h1>
      <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80" alt="Presek" className="h-80 w-full rounded-2xl object-cover" />
      <div className="space-y-3">{items.map((item) => <details key={item} className="card"><summary className="cursor-pointer font-medium">{item}</summary><p className="mt-2 text-sm text-brand-500">Detaljan opis sloja i tehnički parametri (placeholder).</p></details>)}</div>
      <div className="card"><h2 className="font-display text-2xl">FAQ</h2><ul className="mt-3 space-y-2 text-brand-500"><li>Kako je rešena izolacija?</li><li>Koji je sistem grejanja?</li><li>Garancije i održavanje?</li></ul></div>
    </section>
  );
}
