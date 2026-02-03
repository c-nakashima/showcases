export interface TabItem {
  id: string;
  text: string;
}

export interface TabGroupProps {
  items: TabItem[];
  defaultActiveId?: string;
}
