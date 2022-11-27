import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SentimentRoutingModule } from './sentiment-routing.module'
import { SentimentComponent } from './sentiment.component'
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [SentimentComponent],
  imports: [
    CommonModule,
    SentimentRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class SentimentModule {}
