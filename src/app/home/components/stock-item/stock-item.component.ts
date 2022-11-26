import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { FinnhubService } from '../../../services/finnhub.service'
import { QuoteDto, SymbolDto } from '../../../dto/Finnhub.dto'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
})
export class StockItemComponent implements OnInit {
  @Input() symbol!: string
  symbolData$!: Observable<SymbolDto>
  symbolQuote$!: Observable<QuoteDto>

  constructor(private finnhubService: FinnhubService) {}

  ngOnInit(): void {
    this.symbolData$ = this.finnhubService.getSymbol(this.symbol)
    this.symbolQuote$ = this.finnhubService.getQuote(this.symbol)
  }
}
