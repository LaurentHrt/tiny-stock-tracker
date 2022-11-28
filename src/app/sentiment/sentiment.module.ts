import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SentimentRoutingModule } from './sentiment-routing.module'
import { SentimentComponent } from './sentiment.component'
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../shared/shared.module'
import { SentimentCardComponent } from './components/sentiment-card/sentiment-card.component'
import { StockService } from '../services/stock.service'

@NgModule({
  declarations: [SentimentComponent, SentimentCardComponent],
  imports: [
    CommonModule,
    SentimentRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [StockService],
})
export class SentimentModule {}
