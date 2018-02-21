import { Component } from '@angular/core';

/**
 * Generated class for the NowPlayingControlBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'now-playing-control-bar',
  templateUrl: 'now-playing-control-bar.html'
})
export class NowPlayingControlBarComponent {

  text: string;

  constructor() {
    console.log('Hello NowPlayingControlBarComponent Component');
    this.text = 'Hello World';
  }

}
