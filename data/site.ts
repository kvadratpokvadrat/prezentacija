export const navItems = [
  ['Početna', '/'],
  ['Interaktivna zgrada', '/interaktivno'],
  ['Materijali i kvalitet', '/materijali'],
  ['Presek zgrade', '/presek'],
  ['Dostupni stanovi', '/stanovi'],
  ['Galerija', '/galerija'],
  ['Lokacija', '/lokacija'],
  ['Prošli projekti', '/projekti'],
  ['O nama', '/o-nama'],
  ['Kontakt', '/kontakt']
] as const;

export const statusLabel = {
  available: 'Dostupan',
  reserved: 'Rezervisan',
  sold: 'Prodat'
} as const;
