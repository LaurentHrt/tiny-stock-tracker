import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SentimentModule } from './sentiment/sentiment.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SentimentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
