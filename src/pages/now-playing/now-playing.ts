import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NowPlayingProvider } from "../../providers/now-playing/now-playing";

/**
 * Generated class for the NowPlayingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-now-playing',
  templateUrl: 'now-playing.html',
})
export class NowPlayingPage {

  intervalometer: any;
  position: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nowPlaying: NowPlayingProvider) {
  }

  ionViewDidEnter() {
    this.intervalometer = setInterval(() => {
      this.nowPlaying.getCurrPos()().then((pos) => {
        if (Math.floor(pos) > -1) {
          this.position = Math.floor(pos);
          console.log(this.position);
        }
      });
    }, 1000)
  }

  ionViewDidLeave() {
    clearInterval(this.intervalometer)
  }

  seek(secs: number) {
    console.log(secs);
    this.nowPlaying.seekTo(secs);
  }

}
