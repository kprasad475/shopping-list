import { Component, OnInit } from '@angular/core';

export interface StoreSuggestion {
  storeName: string;
  location: string;
}
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit{
  storeSuggestions: StoreSuggestion[] = [
    { storeName: 'SuperMart', location: '123 Main St' },
    { storeName: 'ShopMore', location: '456 Elm St' },
    // Add more hardcoded store suggestions here
  ];

  ngOnInit(): void {
      
  }

  userLocation = 'Downtown'; // Hardcoded user location for simplicity
}
