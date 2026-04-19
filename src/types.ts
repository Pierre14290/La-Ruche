export type Page =
  | 'home'
  | 'enjeux'
  | 'campus'
  | 'logements'
  | 'environnement'
  | 'financier'
  | 'logistique';

export interface NavItem {
  id: Page;
  label: string;
}
