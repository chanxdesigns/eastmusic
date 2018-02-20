import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Media, MediaObject } from "@ionic-native/media";

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

  public timer: number;
  public trackName: String;
  public play: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private media: Media) {
  }

  ionViewDidLoad() {
    this.trackName = this.navParams.get('name');

    const audio: MediaObject = this.media.create(this.navParams.get('url'));
    setInterval(() => {
      audio.getCurrentPosition().then((pos) => {
        this.timer = pos;
      })
    });

    this.play = () => {
      audio.play();
    }
  }

}
