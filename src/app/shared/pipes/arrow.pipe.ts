import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'arrow',
})
export class ArrowPipe implements PipeTransform {
  transform(value: number): string {
    return value > 0 ? '⬈' : value < 0 ? '⬊' : '➜'
  }
}
