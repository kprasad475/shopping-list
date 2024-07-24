import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  items = [
    { id: 1, name: 'Milk', category: 'Dairy', quantity: 2, purchased: false },
    { id: 2, name: 'Bread', category: 'Bakery', quantity: 1, purchased: false },
    { id: 3, name: 'Eggs', category: 'Dairy', quantity: 12, purchased: true },
  ];

  addItem(item:any){
this.items.push(item)
  }

  editItem(updatedItem:any){
    const index = this.items.findIndex(item => item.id === updatedItem.id);
    if(index! == -1 ){
      this.items[index] = updatedItem
    }
  }

  deleteItem(itemId:number){
    this.items = this.items.filter(item => item.id === itemId)
  }
markUsPurchased(itemId:number){
  const  item = this.items.find(item => item.id === itemId);
  if(item){
    item.purchased = !item.purchased
  }
}



}
