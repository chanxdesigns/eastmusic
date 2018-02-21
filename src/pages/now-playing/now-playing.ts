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

  timer: number;
  trackName: string;
  trackCover: string;
  backgroundImg: string;
  duration: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nowPlaying: NowPlayingProvider) {
  }

  ionViewDidLoad() {
    this.trackName = this.nowPlaying.trackName;
    this.trackCover = this.nowPlaying.trackCover;
    this.timer = this.nowPlaying.timer;
    this.duration = this.nowPlaying.duration;
    this.backgroundImg = 'url(' + this.nowPlaying.trackBackground + ')';
  }

}
