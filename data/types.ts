export type UnitStatus = 'available' | 'reserved' | 'sold';

export interface Unit {
  id: string;
  label: string;
  floor: number;
  area: number;
  rooms: number;
  orientation: string;
  status: UnitStatus;
  price: string;
  planImg: string;
  pdfUrl: string;
  svgId: string;
}

export interface Project {
  id: string;
  name: string;
  year: string;
  location: string;
  summary: string;
  image: string;
}
