import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import {
  InsiderSentimentDto,
  QuoteDto,
  SearchSymbolDto,
  SentimentDataDto,
  SymbolDto,
} from '../dto/Finnhub.dto'

@Injectable({
  providedIn: 'root',
})
export class StockService {
  finnhubUrl = 'https://finnhub.io/api/v1/'
  token = '&token=bu4f8kn48v6uehqi3cqg'

  constructor(private http: HttpClient) {}

  getSymbol(search: string): Observable<SymbolDto> {
    return this.http
      .get<SearchSymbolDto>(this.finnhubUrl + 'search?q=' + search + this.token)
      .pipe(map((symbol) => symbol.result[0]))
  }

  getQuote(symbol: string): Observable<QuoteDto> {
    return this.http.get<QuoteDto>(
      this.finnhubUrl + 'quote?symbol=' + symbol + this.token
    )
  }

  getSentiment(
    symbol: string,
    from: Date,
    to: Date
  ): Observable<InsiderSentimentDto> {
    const formatedFrom = from.toISOString().slice(0, 10).replace(/-/g, '-')
    const formatedTo = to.toISOString().slice(0, 10).replace(/-/g, '-')
    return this.http.get<InsiderSentimentDto>(
      this.finnhubUrl +
        'stock/insider-sentiment?symbol=' +
        symbol +
        '&from=' +
        formatedFrom +
        '&to=' +
        formatedTo +
        this.token
    )
  }

  getSentimentLastThreeMonths(symbol: string): Observable<SentimentDataDto[]> {
    const to = new Date()
    const from = new Date()
    from.setMonth(to.getMonth() - 3)
    return this.getSentiment(symbol, from, to).pipe(
      map((result) => result.data.slice(-3, result.data.length))
    )
  }
}
