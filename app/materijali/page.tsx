import type { Metadata } from 'next';

const sections = [
  'Fasada (demit + dekorativna cigla)',
  'Stolarija (ALU/PVC — placeholder)',
  'Podovi (keramika velikog formata / parket)',
  'Grejanje/Hlađenje (placeholder)',
  'Sanitarije (premium brendovi)',
  'Zajednički prostori',
  'Garaža i pristup'
];

export const metadata: Metadata = { title: 'Materijali i kvalitet', description: 'Premium brošura kvaliteta gradnje i završne obrade projekta Reljkovićeva 59.' };

export default function MaterijaliPage() {
  return <section className="section"><h1 className="font-display text-4xl">Materijali i kvalitet</h1><div className="mt-8 grid gap-4 md:grid-cols-2">{sections.map((s) => <article key={s} className="card"><h2 className="font-medium">{s}</h2><p className="mt-2 text-sm text-brand-500">Fotografija/render placeholder spreman za zamenu finalnim sadržajem.</p></article>)}</div><a href="/placeholders/specifikacija.pdf" className="mt-8 inline-block rounded-full bg-brand-900 px-6 py-3 text-white">Preuzmi specifikaciju materijala (PDF)</a></section>;
}
