import type { Metadata } from 'next';
import { InteractiveBuilding } from '@/components/InteractiveBuilding';

export const metadata: Metadata = {
  title: 'Interaktivna zgrada',
  description: 'Interaktivni prikaz fasade sa izborom stanova, filterima i brzim upitom za jedinicu.'
};

export default function InteraktivnoPage() {
  return <InteractiveBuilding />;
}
