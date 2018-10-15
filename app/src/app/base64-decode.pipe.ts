import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64Decode'
})
export class Base64DecodePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value !== undefined) {
      try {
          // Handle the "Unicode Problem": https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
          return decodeURIComponent(atob(value).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
      } catch (e) {
          return `The supplied value ("${value}") doesn't appear to be Base64 encoded`;
      }
    }
  }

}
