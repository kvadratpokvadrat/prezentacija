import type { Metadata } from 'next';
import { UnitsExplorer } from '@/components/UnitsExplorer';

export const metadata: Metadata = { title: 'Dostupni stanovi', description: 'Tabela i kartice svih stanova sa filterima, detaljima i povezivanjem sa interaktivnom zgradom.' };

export default function StanoviPage() {
  return <UnitsExplorer />;
}
