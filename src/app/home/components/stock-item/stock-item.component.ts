import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { catchError, Observable, throwError } from 'rxjs'
import { StockService } from '../../../services/stock.service'
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

  symbolQuote$!: Observable<QuoteDto>
  displaySymbol!: string
  description!: string
  error: boolean = false

  constructor(private finnhubService: StockService, private router: Router) {}

  ngOnInit(): void {
    this.finnhubService.getSymbol(this.symbol).subscribe((data) => {
      this.displaySymbol = data.symbol
      this.description = data.description
      this.symbolQuote$ = this.finnhubService.getQuote(data.symbol).pipe(
        catchError((err) => {
          this.error = true
          return throwError(err)
        })
      )
    })
  }

  deleteSymbol(): void {
    this.symbolDeleted.emit(this.symbol)
  }

  naviguateToSentiment(): void {
    this.router.navigateByUrl(`sentiment/${this.symbol}`)
  }

  getButtonId(prefix: string): string {
    return `${prefix}${this.symbol}`
  }
}
