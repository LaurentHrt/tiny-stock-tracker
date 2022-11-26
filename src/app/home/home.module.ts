import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StockListComponent } from './components/stock-list/stock-list.component'
import { HomeComponent } from './home.component'
import { StockInputComponent } from './components/stock-input/stock-input.component'
import { StockItemComponent } from './components/stock-item/stock-item.component'
import { HomeRoutingModule } from './home-routing.module'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    StockInputComponent,
    StockListComponent,
    StockItemComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
