import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { SentimentDataDto, SymbolDto } from '../../../dto/Finnhub.dto'
import { StockService } from '../../../services/stock.service'

@Component({
  selector: 'app-sentiment-card',
  templateUrl: './sentiment-card.component.html',
  styleUrls: ['./sentiment-card.component.scss'],
})
export class SentimentCardComponent implements OnInit {
  @Input() symbol!: string
  sentiments$!: Observable<SentimentDataDto[]>
  symbolData$!: Observable<SymbolDto>

  constructor(private finnhubService: StockService) {}

  ngOnInit(): void {
    this.symbolData$ = this.finnhubService.getSymbol(this.symbol)
    this.sentiments$ = this.finnhubService.getSentimentLastThreeMonths(
      this.symbol
    )
  }
}
