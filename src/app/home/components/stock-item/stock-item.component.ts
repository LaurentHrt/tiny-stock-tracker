import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Observable } from 'rxjs'
import { FinnhubService } from '../../../services/finnhub.service'
import { QuoteDto, SymbolDto } from '../../../dto/Finnhub.dto'
import { Router } from '@angular/router'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
})
export class StockItemComponent implements OnInit {
  @Input() symbol!: string

  @Output() symbolDeleted = new EventEmitter<string>()

  symbolData$!: Observable<SymbolDto>
  symbolQuote$!: Observable<QuoteDto>

  constructor(private finnhubService: FinnhubService, private router: Router) {}

  ngOnInit(): void {
    this.symbolData$ = this.finnhubService.getSymbol(this.symbol)
    this.symbolQuote$ = this.finnhubService.getQuote(this.symbol)
  }

  deleteSymbol() {
    this.symbolDeleted.emit(this.symbol)
  }

  naviguateToSentiment() {
    this.router.navigateByUrl(`sentiment/${this.symbol}`)
  }
}
