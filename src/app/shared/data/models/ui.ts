export interface MenuItem {
  name: string;
  icon: string;
  items: MenuSubItem[];
  type?: string;
}

export interface MenuSubItem {
  name: string;
  navigation: string;
  icon: string;
}
