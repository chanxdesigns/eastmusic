import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TextTrimmerPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'textTrimmer',
})
export class TextTrimmerPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, args: number) {
    let text = value.split('');
    return text.length > args ? value.substr(0, (args-3)).trim() + "..." : value;
  }
}
