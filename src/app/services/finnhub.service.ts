import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { QuoteDto, SearchSymbolDto, SymbolDto } from '../dto/Finnhub.dto'

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
}
