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
export class ReminderComponent implements OnInit {
  reminders: Reminder[] = [
    { itemName: 'Milk', date: new Date('2024-07-30') },
    { itemName: 'Bread', date: new Date('2024-07-25') },
    // Add more hardcoded reminders here
  ];

  newReminder: Reminder = { itemName: '', date: new Date() };

  ngOnInit(): void {
  }

  addReminder() {
   
    if (this.newReminder) {
      alert('haai')
      this.reminders.push({ ...this.newReminder });
      console.log(this.reminders)
      this.newReminder = { itemName: '', date: new Date() };
    }
  }

 

  deleteReminder(index: number) {
    this.reminders.splice(index, 1);
  }
}
