import type { Metadata } from 'next';
import { projects } from '@/data';

export const metadata: Metadata = { title: 'Prošli projekti', description: 'Pregled završenih projekata investitora Kalman Kop sa fokusom na kredibilitet i kvalitet.' };

export default function ProjektiPage() {
  return <section className="section"><h1 className="font-display text-4xl">Prošli projekti</h1><div className="mt-8 grid gap-4 md:grid-cols-3">{projects.map((project) => <article key={project.id} className="card"><img src={project.image} alt={project.name} loading="lazy" className="h-40 w-full rounded-xl object-cover" /><h2 className="mt-3 font-medium">{project.name}</h2><p className="text-sm text-brand-500">{project.location} • {project.year}</p><p className="mt-2 text-sm text-brand-500">{project.summary}</p></article>)}</div><div className="card mt-6"><h2 className="font-display text-2xl">Zašto Kalman Kop</h2><p className="mt-2 text-brand-500">Pouzdan partner sa fokusom na rokove, kvalitet gradnje i transparentnu komunikaciju.</p></div></section>;
}
