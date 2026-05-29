export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: string[];
}

export interface Partner {
  id: string;
  name: string;
  iconName: string;
}

export interface Stat {
  value: string;
  label: string;
  colorTheme: 'orange' | 'red';
  arrowUrl?: string;
}
