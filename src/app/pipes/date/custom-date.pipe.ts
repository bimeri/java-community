import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
  standalone: true,
  pure: true
})
export class CustomDatePipe implements PipeTransform {

  transform(value: | string | number, ...args: unknown[]): unknown {
    console.log("custom date log");
    const date: Date = new Date(value);
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }).format(date);
  }

}
