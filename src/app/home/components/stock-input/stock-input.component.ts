import { Component, OnInit } from '@angular/core'
import { SymbolService } from '../../../services/symbol.service'

@Component({
  selector: 'app-stock-input',
  templateUrl: './stock-input.component.html',
  styleUrls: ['./stock-input.component.scss'],
})
export class StockInputComponent implements OnInit {
  symbolInput: string = ''

  constructor(private symbolService: SymbolService) {}

  ngOnInit(): void {}

  addSymbol(): void {
    this.symbolService.addSymbol(this.symbolInput.toUpperCase())
  }

  disableButton(): boolean {
    return (
      this.symbolInput.length > 5 ||
      this.symbolInput.length < 1 ||
      /[0-9]/.test(this.symbolInput)
    )
  }
}
