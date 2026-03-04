import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Lokacija', description: 'Mikrolokacija Reljkovićeve 59 sa POI tačkama i benefitima života u Novom Sadu.' };

export default function LokacijaPage() {
  return (
    <section className="section grid gap-6 lg:grid-cols-2">
      <div className="card"><h1 className="font-display text-4xl">Lokacija</h1><img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=1200&q=80" className="mt-4 h-72 w-full rounded-xl object-cover" alt="Mapa" /></div>
      <div className="card"><h2 className="font-display text-2xl">Sve na par minuta</h2><ul className="mt-4 space-y-2 text-brand-500"><li>Škole i vrtići</li><li>Marketi i usluge</li><li>Javni prevoz</li><li>Centar grada</li></ul><p className="mt-4 text-sm text-brand-500">Reljkovićeva 59 pruža mirnu poziciju i brzu povezanost sa svim ključnim sadržajima grada.</p></div>
    </section>
  );
}
