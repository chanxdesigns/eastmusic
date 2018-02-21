import {Component, ViewChild} from '@angular/core';
import {NowPlayingProvider} from "../../providers/now-playing/now-playing";
import {NowPlayingPage} from "../../pages/now-playing/now-playing";
import {NavController} from "ionic-angular";

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

  @ViewChild('myNav') navCtrl: NavController;

  constructor(public nowPlaying: NowPlayingProvider) {
  }

  ngOnInit() {
    this.navigate();
  }

  navigate() {
    this.navCtrl.push(NowPlayingPage);
  }

}
