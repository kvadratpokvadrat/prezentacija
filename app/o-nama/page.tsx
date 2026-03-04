import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'O nama', description: 'Kalman Kop - profesionalni investitor sa jasnom misijom kvalitetne i odgovorne gradnje.' };

export default function ONamaPage() {
  return <section className="section space-y-6"><h1 className="font-display text-4xl">O nama</h1><div className="card"><p>Kalman Kop gradi stambene objekte koji povezuju savremenu arhitekturu, kvalitetnu izvedbu i dugoročnu vrednost za kupce.</p></div><div className="grid gap-4 md:grid-cols-3"><div className="card">15+ godina iskustva</div><div className="card">20+ realizovanih projekata</div><div className="card">1000+ zadovoljnih kupaca</div></div><div className="card">Sertifikati i partneri (placeholder).</div></section>;
}
