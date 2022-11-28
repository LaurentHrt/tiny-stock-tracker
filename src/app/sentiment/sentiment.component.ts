import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
})
export class SentimentComponent implements OnInit {
  symbol!: string
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.symbol = this.activatedRoute.snapshot.params['symbol']
  }

  redirectHome() {
    this.router.navigateByUrl('')
  }
}
