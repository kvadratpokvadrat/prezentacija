# Reljkovićeva 59 — Premium Novogradnja Website

Next.js + TypeScript + Tailwind premium prezentacioni sajt za prodaju stanova.

## Pokretanje

```bash
npm install
npm run dev
```

## Struktura ruta

- `/` Početna
- `/interaktivno` Interaktivna zgrada (SVG overlay + filteri + modal + deep link `?unit=`)
- `/materijali`
- `/presek`
- `/stanovi`
- `/galerija`
- `/lokacija`
- `/projekti`
- `/o-nama`
- `/kontakt`

## Mock podaci

- `data/units.json` — stanovi (`available`, `reserved`, `sold`)
- `data/projects.json` — prošli projekti

## How to update

### Promena statusa stana
Otvorite `data/units.json` i promenite polje `status` na:
- `available`
- `reserved`
- `sold`

### Dodavanje novog stana
U `data/units.json` dodajte objekat sa poljima:
`id, label, floor, area, rooms, orientation, status, price, planImg, pdfUrl, svgId`

### SVG mapiranje stanova (Figma / Illustrator workflow)
1. Izvezite fasadu kao background image.
2. U Figma/Illustrator nacrtajte polygon/path za svaki stan.
3. Za svaki shape postavite ID jednak `svgId` iz `units.json` (npr. `unit-a0205`).
4. Izvezite SVG overlay.
5. U `components/InteractiveBuilding.tsx` zamenite placeholder polygone realnim putanjama ili ubacite eksportovani `<path id="..." />`.
6. Proverite da li svaki `svgId` u JSON postoji u SVG-u.

### Zamena placeholder sadržaja
- Slike i renderi: zameniti `img src` URL-ove ili koristiti `public/placeholders/*`.
- PDF linkovi: postaviti fajlove u `public/placeholders/`.

## SEO
Svaka stranica ima zaseban `metadata` title/description, globalni OpenGraph je podešen u `app/layout.tsx`.
