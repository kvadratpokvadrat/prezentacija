import type { Metadata } from 'next';

const images = [
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80'
];

export const metadata: Metadata = { title: 'Galerija', description: 'Galerija rendera, enterijera, lokacije i toka gradnje projekta Reljkovićeva 59.' };

export default function GalerijaPage() {
  return <section className="section"><h1 className="font-display text-4xl">Galerija</h1><div className="mt-8 grid gap-4 md:grid-cols-2">{images.map((src) => <img key={src} src={src} loading="lazy" className="h-72 w-full rounded-2xl object-cover" alt="Galerija" />)}</div></section>;
}
