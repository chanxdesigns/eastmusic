import { Directive } from '@angular/core';

/**
 * Generated class for the SetBackgroundImgDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[set-background-img]' // Attribute selector
})
export class SetBackgroundImgDirective {

  constructor() {
    console.log('Hello SetBackgroundImgDirective Directive');
  }

}
