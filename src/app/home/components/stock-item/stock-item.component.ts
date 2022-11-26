import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
})
export class StockItemComponent implements OnInit {
  @Input() symbol!: string

  constructor() {}

  ngOnInit(): void {}
}
