import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-variation-arrow',
  templateUrl: './variation-arrow.component.html',
  styleUrls: ['./variation-arrow.component.scss'],
})
export class VariationArrowComponent implements OnInit {
  @Input() value!: number

  constructor() {}

  ngOnInit(): void {}
}
