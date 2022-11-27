import { Component, OnInit } from '@angular/core'
import { SymbolService } from '../../../services/symbol.service'

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent implements OnInit {
  symbolList!: string[]

  constructor(private symbolService: SymbolService) {}

  ngOnInit(): void {
    this.symbolList = this.symbolService.getSavedSymbols()
  }

  onSymbolDelete(symbol: string) {
    this.symbolService.removeSymbol(symbol)
  }
}
