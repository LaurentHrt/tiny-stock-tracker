import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ArrowPipe } from './pipes/arrow.pipe'
import { VariationArrowComponent } from './components/variation-arrow/variation-arrow.component'
import { MonthNamePipe } from './pipes/month-name.pipe'
import { LoadingImageComponent } from './components/loading-image/loading-image.component'

@NgModule({
  declarations: [
    ArrowPipe,
    VariationArrowComponent,
    MonthNamePipe,
    LoadingImageComponent,
  ],
  imports: [CommonModule],
  exports: [
    ArrowPipe,
    VariationArrowComponent,
    MonthNamePipe,
    LoadingImageComponent,
  ],
})
export class SharedModule {}
