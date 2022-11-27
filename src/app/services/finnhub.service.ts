import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import {
  InsiderSentimentDto,
  QuoteDto,
  SearchSymbolDto,
  SymbolDto,
} from '../dto/Finnhub.dto'

@Injectable({
  providedIn: 'root',
})
export class FinnhubService {
  configUrl = 'https://finnhub.io/api/v1/'
  token = '&token=bu4f8kn48v6uehqi3cqg'

  constructor(private http: HttpClient) {}

  getSymbol(search: string): Observable<SymbolDto> {
    console.log('getting symbols for', search)
    return this.http
      .get<SearchSymbolDto>(this.configUrl + 'search?q=' + search + this.token)
      .pipe(map((symbol) => symbol.result[0]))
  }

  getQuote(symbol: string): Observable<QuoteDto> {
    console.log('getting quotes for', symbol)
    return this.http.get<QuoteDto>(
      this.configUrl + 'quote?symbol=' + symbol + this.token
    )
  }

  getSentiment(
    symbol: string,
    from: Date,
    to: Date
  ): Observable<InsiderSentimentDto> {
    console.log('Getting sentiment for', symbol)
    return this.http.get<InsiderSentimentDto>(
      this.configUrl +
        'stock/insider-sentiment?symbol=' +
        symbol +
        '&from=' +
        from.toISOString().slice(0, 10).replace(/-/g, '-') +
        '&to=' +
        to.toISOString().slice(0, 10).replace(/-/g, '-') +
        this.token
    )
  }
}
