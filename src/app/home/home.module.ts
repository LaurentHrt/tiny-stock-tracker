import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockInputComponent } from './stock-input/stock-input.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockItemComponent } from './stock-item/stock-item.component';



@NgModule({
  declarations: [
    StockInputComponent,
    StockListComponent,
    StockItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
