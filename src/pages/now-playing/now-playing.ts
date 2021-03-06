import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NowPlayingProvider } from "../../providers/now-playing/now-playing";
import * as moment from "moment";

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
  positionsInHumanReadable: string = "00:00";
  duration: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nowPlaying: NowPlayingProvider) {
  }

  ionViewDidEnter() {

    // Set track current position in human readable mm:ss
    this.intervalometer = setInterval(() => {
      this.nowPlaying.getCurrPos()().then((pos) => {
        if (Math.floor(pos) > -1) {
          this.position = Math.floor(pos); //moment.utc(moment.duration(Math.floor(pos) * 1000).asMilliseconds()).format("mm:ss")
          this.positionsInHumanReadable = moment.utc(moment.duration(Math.floor(pos) * 1000).asMilliseconds()).format("mm:ss");
        }
      });
    }, 1000);

    // Set track duration in human readable mm:ss
    this.duration = moment.utc(moment.duration(Math.floor(this.nowPlaying.getTrackDuration()) * 1000).asMilliseconds()).format("mm:ss");
  }

  ionViewDidLeave() {
    clearInterval(this.intervalometer)
  }

  seek(secs: number) {
    console.log(secs);
    this.nowPlaying.seekTo(secs);
  }

}
