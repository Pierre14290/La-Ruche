export type Page =
  | 'home'
  | 'enjeux'
  | 'campus'
  | 'logements'
  | 'environnement'
  | 'financier'
  | 'logistique';
  | 'concurrence';

export interface NavItem {
  id: Page;
  label: string;
}
