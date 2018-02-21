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
    this.tracks = [
      {
        id: 123,
        name: "Hallakkho",
        url: "https://s3.ap-south-1.amazonaws.com/eastmusic/hallakho.mp3",
        cover: "https://i.ytimg.com/vi/QHij4Qhyfno/maxresdefault.jpg",
        background:  this.path.applicationDirectory + "www/assets/imgs/bg-mock/ngammadi1-blurred.png"
      },
      {
        id: 1234,
        name: "Ngammadi Phajou",
        url: "https://s3.ap-south-1.amazonaws.com/eastmusic/phajou.mp3",
        cover: "https://i.ytimg.com/vi/6yCSn9BgFf8/maxresdefault.jpg",
        background: this.path.applicationDirectory + "www/assets/imgs/bg-mock/nurei1-blurred.png"
      }
    ];
  }

  play(audio) {
    console.log("Audio hit" + audio)
    this.nowPlayingProvider.play(audio);
  }
}
