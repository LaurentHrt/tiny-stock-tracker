import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'
import { SentimentModule } from './sentiment/sentiment.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    SentimentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
