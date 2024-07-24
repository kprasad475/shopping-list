import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { CatogoriesComponent } from './catogories/catogories.component';
import { ReminderComponent } from './reminder/reminder.component';
import { StoreComponent } from './store/store.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ItemFormComponent,
    CatogoriesComponent,
    ReminderComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
