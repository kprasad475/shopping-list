import { Component } from '@angular/core';
interface Item {
  id: number;
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-catogories',
  templateUrl: './catogories.component.html',
  styleUrl: './catogories.component.css'
})
export class CatogoriesComponent {
  categories = ['Dairy', 'Bakery', 'Fruits', 'Vegetables'];
  selectedCategory: string = '';

  itemsByCategory: { [key: string]: Item[] } = {
    'Dairy': [
      { id: 1, name: 'Milk', quantity: 2 },
      { id: 3, name: 'Eggs', quantity: 12 }
    ],
    'Bakery': [
      { id: 2, name: 'Bread', quantity: 1 }
    ],
    'Fruits': [
      { id: 4, name: 'Apples', quantity: 6 }
    ],
    'Vegetables': [
      { id: 5, name: 'Carrots', quantity: 5 }
    ]
  };

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
