import { Component } from '@angular/core';
import {Platform} from "ionic-angular";
import {File} from "@ionic-native/file";
import {NowPlayingProvider} from "../../providers/now-playing/now-playing";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private tracks: Array<Object>;

  constructor(public platform: Platform, private path: File, private nowPlayingProvider: NowPlayingProvider) {
    console.log(platform);

    this.tracks = [
      {
        id: 123,
        url: "https://s3.ap-south-1.amazonaws.com/eastmusic/hallakho.mp3",
        trackName: "Hallakkho",
        artists: "AJ Maisnam",
        albumName: "Hallakho",
        albumCover: "https://i.ytimg.com/vi/QHij4Qhyfno/maxresdefault.jpg",
        albumBackground:  platform.is('android') ?
          this.path.applicationDirectory + "www/assets/imgs/bg-mock/ngammadi1-blurred.png" :
          + "../assets/imgs/bg-mock/ngammadi1-blurred.png"
      },
      {
        id: 1234,
        url: "https://s3.ap-south-1.amazonaws.com/eastmusic/phajou.mp3",
        trackName: "Ngammadi Phajou",
        artists: "Arbind & Pushparani",
        albumName: "Nurei",
        albumCover: "https://i.ytimg.com/vi/6yCSn9BgFf8/maxresdefault.jpg",
        albumBackground: platform.is('android') ?
          this.path.applicationDirectory + "www/assets/imgs/bg-mock/nurei1-blurred.png" :
          + "../assets/imgs/bg-mock/nurei1-blurred.png"
      }
    ];
  }

  play(audio) {
    console.log("Audio hit" + audio)
    this.nowPlayingProvider.play(audio);
  }
}
