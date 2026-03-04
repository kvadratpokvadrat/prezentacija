import { statusLabel } from '@/data/site';
import { UnitStatus } from '@/data/types';

const statusClasses: Record<UnitStatus, string> = {
  available: 'bg-emerald-100 text-emerald-700',
  reserved: 'bg-amber-100 text-amber-700',
  sold: 'bg-rose-100 text-rose-700'
};

export function StatusBadge({ status }: { status: UnitStatus }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusClasses[status]}`}>{statusLabel[status]}</span>;
}
