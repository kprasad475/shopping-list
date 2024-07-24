import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  stores = [
    { name: 'Local Grocery', location: 'Downtown' },
    { name: 'Big Box Store', location: 'Suburbs' }
  ];

  userLocation = 'Downtown'; // Hardcoded user location for simplicity
}
