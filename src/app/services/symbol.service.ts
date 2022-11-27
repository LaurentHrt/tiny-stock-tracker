import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class SymbolService {
  private symbolList: string[] = ['TSLA', 'AAPL'] // TODO retrieve localstorage

  constructor() {}

  getSavedSymbols(): string[] {
    console.log('Getting all symbol', this.symbolList)
    return this.symbolList
  }

  addSymbol(symbol: string) {
    // TODO check if symbol exists and push the correct symbol
    this.symbolList.push(symbol)
    // TODO add in localstorage
    console.log('symbol', symbol, 'added')
  }

  removeSymbol(symbol: string) {
    const index = this.symbolList.findIndex((s) => s === symbol)
    if (index > -1) {
      this.symbolList.splice(index, 1)
      console.log('symbol', symbol, 'removed')
    }
  }
}
