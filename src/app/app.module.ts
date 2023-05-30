import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { UpdateListComponent } from './component/update-list/update-list.component';
import { AddListComponent } from './component/add-list/add-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    UpdateListComponent,
    AddListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
