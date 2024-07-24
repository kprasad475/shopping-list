import { Component, OnInit } from '@angular/core';
export interface Reminder {
  itemName: string;
  date: Date;
}

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.css'
})
export class ReminderComponent implements OnInit{
  reminders: Reminder[] = [
    { itemName: 'Milk', date: new Date('2024-07-30') },
    { itemName: 'Bread', date: new Date('2024-07-25') },
    // Add more hardcoded reminders here
  ];

  ngOnInit(): void {
      
  }
}
