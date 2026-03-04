import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { MotionReveal } from '@/components/MotionReveal';
import { projects, units } from '@/data';

export const metadata: Metadata = {
  title: 'Početna',
  description: 'Reljkovićeva 59 je premium novogradnja u Novom Sadu sa fokusom na kvalitet, lokaciju i sigurnu kupovinu.'
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1800&q=80" alt="Reljkovićeva 59 render" className="h-[70vh] w-full object-cover" />
        <div className="absolute inset-0 bg-brand-900/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="section text-white">
            <h1 className="font-display text-5xl font-semibold">Reljkovićeva 59</h1>
            <p className="mt-4 text-xl">Premium stanovi u Novom Sadu</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/stanovi" className="rounded-full bg-white px-6 py-3 text-brand-900">Pogledaj dostupne stanove</Link>
              <Link href="/interaktivno" className="rounded-full border border-white px-6 py-3">Interaktivna zgrada</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section grid gap-4 md:grid-cols-4">
        {['24 stanova', 'Po+P+6', '28 garažnih mesta', 'Rok: Q4 2026'].map((item) => <div key={item} className="card text-center text-lg">{item}</div>)}
      </section>

      <section className="section">
        <h2 className="font-display text-3xl">Zašto Reljkovićeva 59</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{['Mikrolokacija', 'Premium kvalitet', 'Pametni rasporedi', 'Investitor Kalman Kop'].map((item) => <MotionReveal key={item}><div className="card">{item}</div></MotionReveal>)}</div>
      </section>

      <section className="section grid gap-6 lg:grid-cols-2">
        <div className="card"><h3 className="font-display text-2xl">Interaktivna zgrada</h3><p className="mt-2 text-brand-500">Pregledajte stanove direktno na fasadi i otvorite detalje klikom.</p><Link href="/interaktivno" className="mt-5 inline-block rounded-full bg-brand-900 px-4 py-2 text-white">Otvori pun prikaz</Link></div>
        <div className="card"><h3 className="font-display text-2xl">Materijali i kvalitet</h3><ul className="mt-4 list-inside list-disc text-brand-500"><li>Demit fasada + dekorativna cigla</li><li>ALU/PVC stolarija</li><li>Velikoformatna keramika / parket</li></ul><Link href="/materijali" className="mt-4 inline-block text-brand-700 underline">Svi detalji materijala</Link></div>
      </section>

      <section className="section grid gap-6 lg:grid-cols-2">
        <div className="card"><h3 className="font-display text-2xl">Lokacija</h3><img src="https://images.unsplash.com/photo-1577083552431-6e5fd01988f1?auto=format&fit=crop&w=1200&q=80" alt="Mapa" className="mt-4 h-56 w-full rounded-xl object-cover" loading="lazy" /></div>
        <div className="card"><h3 className="font-display text-2xl">Prošli projekti</h3><div className="mt-4 grid gap-3">{projects.map((p) => <div key={p.id} className="rounded-xl border p-3">{p.name} • {p.year}</div>)}</div></div>
      </section>

      <section className="section"><h2 className="font-display text-3xl">Zatraži ponudu / katalog</h2><p className="mb-4 mt-2 text-brand-500">Trenutno dostupno: {units.filter((u) => u.status === 'available').length} stanova.</p><ContactForm /></section>
    </>
  );
}
