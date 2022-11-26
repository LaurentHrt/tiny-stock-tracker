import { Component, OnInit } from '@angular/core'
import { SymbolService } from '../../../services/symbol.service'

@Component({
  selector: 'app-stock-input',
  templateUrl: './stock-input.component.html',
  styleUrls: ['./stock-input.component.scss'],
})
export class StockInputComponent implements OnInit {
  symbolInput!: string

  constructor(private symbolService: SymbolService) {}

  ngOnInit(): void {}

  addSymbol() {
    console.log('add', this.symbolInput)
    this.symbolService.addSymbol(this.symbolInput)
  }
}
