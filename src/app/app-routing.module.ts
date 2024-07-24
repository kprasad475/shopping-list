import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { CatogoriesComponent } from './catogories/catogories.component';

const routes: Routes = [ { path: 'shoppinglist', component: ShoppingListComponent },
  { path: 'catogories', component: CatogoriesComponent },
  { path: 'itemform', component: ItemFormComponent },
  { path: '', redirectTo: '/shoppinglist', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
