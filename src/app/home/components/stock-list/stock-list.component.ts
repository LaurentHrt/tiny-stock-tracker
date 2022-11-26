import { Component, OnInit } from '@angular/core'
import { SymbolService } from '../../../services/symbol.service'
import { StockService } from '../../../services/stock.service'

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent implements OnInit {
  symbolList!: string[]

  constructor(private symbolService: SymbolService) {}

  ngOnInit(): void {
    this.symbolList = this.symbolService.getAllSymbols()
  }
}
