import { Component } from '@angular/core';
import {NowPlayingProvider} from "../../providers/now-playing/now-playing";
import {NowPlayingPage} from "../../pages/now-playing/now-playing";

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
  playing: any = NowPlayingPage;

  constructor(public nowPlaying: NowPlayingProvider) {
  }

}
