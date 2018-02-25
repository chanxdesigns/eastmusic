import { Component } from '@angular/core';
import {File} from "@ionic-native/file";
import {NowPlayingProvider} from "../../providers/now-playing/now-playing";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private tracks: Array<Object>;

  constructor(private path: File, private nowPlayingProvider: NowPlayingProvider) {
    this.tracks = [
      {
        id: 123,
        duration: 230,
        url: "https://s3.ap-south-1.amazonaws.com/eastmusic/hallakho.mp3",
        trackName: "Hallakkho",
        artists: "AJ Maisnam",
        albumName: "Hallakho",
        albumCover: "https://i.ytimg.com/vi/QHij4Qhyfno/maxresdefault.jpg",
        albumBackground:  "https://i.ytimg.com/vi/QHij4Qhyfno/maxresdefault.jpg"
      },
      {
        id: 1234,
        duration: 243,
        url: "https://s3.ap-south-1.amazonaws.com/eastmusic/phajou.mp3",
        trackName: "Ngammadi Phajou",
        artists: "Arbind & Pushparani",
        albumName: "Nurei",
        albumCover: "https://i.ytimg.com/vi/JLg-OraDu1c/maxresdefault.jpg",
        albumBackground: "https://i.ytimg.com/vi/JLg-OraDu1c/maxresdefault.jpg"
      },
      {
        id: 12345,
        duration: 264,
        url: "https://s3.ap-south-1.amazonaws.com/eastmusic/fongamdana.mp3",
        trackName: "Fongamdana",
        artists: "Sanju Shamulailatpam & Raina Tekcham",
        albumName: "Fongamdana",
        albumCover: "https://s3.ap-south-1.amazonaws.com/eastmusic/img/fongamdana_cover.jpg",
        albumBackground: "https://s3.ap-south-1.amazonaws.com/eastmusic/img/fongamdana_cover.jpg"
      }
    ];
  }

  play(audio) {
    this.nowPlayingProvider.play(audio);
  }
}
