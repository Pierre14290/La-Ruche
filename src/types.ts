export type Page =
  | 'home'
  | 'enjeux'
  | 'campus'
  | 'logements'
  | 'environnement'
  | 'financier'
  | 'logistique';
  | 'concurrence';
  | 'protection';
  | 'etensuite';

export interface NavItem {
  id: Page;
  label: string;
}
