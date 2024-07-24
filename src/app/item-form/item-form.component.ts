import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ShoppingItem } from '../shopping-list/shopping-list.component';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent  implements OnInit{
  isEdit: boolean;
  item: ShoppingItem;

  categories: string[] = ['Dairy', 'Bakery', 'Produce', 'Meat', 'Frozen'];

  constructor(
    public dialogRef: MatDialogRef<ItemFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ShoppingItem
  ) {}

  ngOnInit(): void {
    this.isEdit = !!this.data;
    this.item = this.data || { id: Date.now(), name: '', category: '', quantity: 1, purchased: false };
  }

  submitForm(): void {
    this.dialogRef.close(this.item);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
