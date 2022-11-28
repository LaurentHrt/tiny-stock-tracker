import { Injectable } from '@angular/core'

const enum localStorageKeys {
  symbols = 'symbols',
}

@Injectable({
  providedIn: 'root',
})
export class SymbolService {
  private readonly symbolList: string[]

  constructor() {
    this.symbolList = JSON.parse(
      localStorage.getItem(localStorageKeys.symbols) || '[]'
    )
  }

  getSavedSymbols(): string[] {
    return this.symbolList
  }

  addSymbol(symbol: string) {
    if (this.symbolList.find((s) => s === symbol)) {
      return
    }
    this.symbolList.push(symbol)
    this.saveSymbolInLocalStorage()
  }

  removeSymbol(symbol: string) {
    const index = this.symbolList.findIndex((s) => s === symbol)
    if (index > -1) {
      this.symbolList.splice(index, 1)
      this.saveSymbolInLocalStorage()
    }
  }

  private saveSymbolInLocalStorage() {
    localStorage.setItem(
      localStorageKeys.symbols,
      JSON.stringify(this.symbolList)
    )
  }
}
