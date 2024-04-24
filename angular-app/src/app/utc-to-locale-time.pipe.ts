import { Pipe, PipeTransform } from '@angular/core';
import { UtcToLocalTimeFormat } from './UtcToLocaleTimeFormat';

@Pipe({
  name: 'utcToLocaleTime',
  standalone: true
})
export class UtcToLocaleTimePipe implements PipeTransform {

  transform(
    utcDate: number | undefined,
    format: UtcToLocalTimeFormat | string): string {
      if(utcDate === undefined){
        return 'undifined';
      }
      utcDate = utcDate * 1000;

      var browserLanguage = navigator.language;
      if(format===UtcToLocalTimeFormat.SHORT){
        let date = new Date(utcDate).toLocaleDateString(browserLanguage);
        let time = new Date(utcDate).toLocaleTimeString(browserLanguage);

        return `${date}, ${time}`;
      }
      else if(format === UtcToLocalTimeFormat.SHORT_DATE){
        return new Date(utcDate).toLocaleDateString(browserLanguage);
      }
      else if(format === UtcToLocalTimeFormat.SHORT_TIME){
        return new Date(utcDate).toLocaleTimeString(browserLanguage);
      }
      else if(format === UtcToLocalTimeFormat.FULL){
        return new Date(utcDate).toString();
      }else{
        console.error(`Do not have logic to format utc date, format: ${format}`);
        return new Date(utcDate).toString();
      }
  }
}
