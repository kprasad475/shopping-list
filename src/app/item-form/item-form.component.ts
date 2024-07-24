import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent {
  @Output () itemAdded = new EventEmitter<any>();

  item = {
    id: 0,
    name: '',
    category: '',
    quantity: 1,
    reminder: false
  };

  categories = ['Dairy', 'Bakery', 'Fruits', 'Vegetables'];

  onSubmit(){
    this.item.id = Date.now();
    this.itemAdded.emit(this.item);
    this.item = {id:0,name:'',category:'',quantity:1,reminder:false}
  }

}
