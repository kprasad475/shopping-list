import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemFormComponent } from '../item-form/item-form.component';
import { animate, style, transition, trigger } from '@angular/animations';
export interface ShoppingItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  purchased: boolean;
  reminder:boolean
}


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ShoppingListComponent  implements OnInit{
  items = [
    { id: 1, name: 'Milk', category: 'Dairy', quantity: 2, purchased: false },
    { id: 2, name: 'Bread', category: 'Bakery', quantity: 1, purchased: false },
    { id: 3, name: 'Eggs', category: 'Dairy', quantity: 12, purchased: true },
  ];

  constructor(private dialog:MatDialog){

  }

  ngOnInit(){
    
  }
  addItem(item:any){
this.items.push(item)
  }

  openItemForm(item?: ShoppingItem): void {
    const dialogRef = this.dialog.open(ItemFormComponent, {
      width: '500px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (item) {
          // Edit item
          const index = this.items.findIndex(i => i.id === item.id);
          if (index > -1) {
            this.items[index] = result;
          }
        } else {
          // Add new item
          this.items.push(result);
        }
      }
    });
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
