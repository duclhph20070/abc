import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { AddListComponent } from './component/add-list/add-list.component';
import { UpdateListComponent } from './component/update-list/update-list.component';

const routes: Routes = [
  {path:"",component:ProductsListComponent},
  {path:"addPr",component:AddListComponent},
  {path:"updatePr/:id",component:UpdateListComponent},
  {path:"**",component:ProductsListComponent,pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }