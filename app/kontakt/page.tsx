import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = { title: 'Kontakt', description: 'Pošaljite upit za stan u projektu Reljkovićeva 59 i naš tim će vas kontaktirati u najkraćem roku.' };

export default function KontaktPage() {
  return <section className="section grid gap-6 lg:grid-cols-2"><div><h1 className="font-display text-4xl">Kontakt</h1><p className="mt-3 text-brand-500">Telefon: +381 60 000 000<br />Email: prodaja@kalmankop.rs<br />Adresa: Reljkovićeva 59, Novi Sad</p><img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80" alt="Mapa" className="mt-6 h-72 w-full rounded-xl object-cover" /></div><ContactForm /></section>;
}
