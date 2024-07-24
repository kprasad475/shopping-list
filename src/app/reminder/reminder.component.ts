import { Component } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.css'
})
export class ReminderComponent {
  reminders = [
    { item: 'Milk', dueDate: new Date('2024-07-30') },
    { item: 'Bread', dueDate: new Date('2024-07-31') }
  ];
}
