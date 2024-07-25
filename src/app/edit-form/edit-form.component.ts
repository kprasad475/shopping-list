import { Component, Inject, OnInit } from '@angular/core';
import { ShoppingItem } from '../shopping-list/shopping-list.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent implements OnInit {
  isEdit: boolean;
  item: ShoppingItem;
  categories: string[] = ['Dairy', 'Bakery', 'Produce', 'Meat', 'Frozen'];

  constructor(
    public dialogRef: MatDialogRef<EditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ShoppingItem
  ) {}

  ngOnInit() {
    this.isEdit = !!this.data;
    this.item = this.data ? { ...this.data } : { id: Date.now(), name: '', category: '', quantity: 1, purchased: false };
  }

  submitForm(): void {
    this.dialogRef.close(this.item);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}

