import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StockListComponent } from './components/stock-list/stock-list.component'
import { HomeComponent } from './home.component'
import { StockInputComponent } from './components/stock-input/stock-input.component'
import { StockItemComponent } from './components/stock-item/stock-item.component'
import { HomeRoutingModule } from './home-routing.module'
import { FormsModule } from '@angular/forms'
import { SymbolService } from '../services/symbol.service'
import { HttpClientModule } from '@angular/common/http'
import { FinnhubService } from '../services/finnhub.service'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    StockInputComponent,
    StockListComponent,
    StockItemComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class HomeModule {}
