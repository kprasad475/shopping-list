export interface Item {
    id: number;
    name: string;
    category: string;
    quantity: number;
    purchased: boolean;
    reminder: Date | null;
  }