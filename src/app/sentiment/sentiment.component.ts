import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {
  InsiderSentimentDto,
  SentimentDataDto,
  SymbolDto,
} from '../dto/Finnhub.dto'
import { FinnhubService } from '../services/finnhub.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss'],
})
export class SentimentComponent implements OnInit {
  symbol!: string
  insiderSentiment$!: Observable<InsiderSentimentDto>
  symbolData$!: Observable<SymbolDto>

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private finnhubService: FinnhubService
  ) {}

  ngOnInit(): void {
    this.symbol = this.activatedRoute.snapshot.params['symbol']
    this.symbolData$ = this.finnhubService.getSymbol(this.symbol)

    const to = new Date()
    const from = new Date()
    from.setMonth(to.getMonth() - 3)
    this.insiderSentiment$ = this.finnhubService.getSentiment(
      this.symbol,
      from,
      to
    )
  }

  redirectHome() {
    this.router.navigateByUrl('')
  }
}
