import { Component } from '@angular/core';
import {Platform} from "ionic-angular";
import { NowPlayingPage } from "../now-playing/now-playing";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private tracks: Array<Object>;
  private nowPlaying: any;

  constructor(public platform: Platform) {
    this.tracks = [
      {
        name: "Hallakkho",
        url: "https://s3.ap-south-1.amazonaws.com/eastmusic/hallakho.mp3"
      },
      {
        name: "Ngammadi Phajou",
        url: "https://s3.ap-south-1.amazonaws.com/eastmusic/phajou.mp3"
      }
    ];

    this.nowPlaying = NowPlayingPage;
  }
}
