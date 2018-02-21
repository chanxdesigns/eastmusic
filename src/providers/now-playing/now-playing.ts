import { Injectable } from '@angular/core';
import {Media, MediaObject} from "@ionic-native/media";

interface ITrack {
  id: number,
  url: string,
  name: string,
  cover: string,
  background: string
}

/*
  Generated class for the NowPlayingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NowPlayingProvider {

  playing: boolean;

  trackId: number;
  trackName: string;
  trackCover: string;
  trackBackground: string;
  timer: number;
  mediaStatus: string;
  duration: number;
  elapsed: number;

  pauseMedia: any;

  constructor(public media: Media) {
  }

  play(track: ITrack) {

    console.log("Here now");

    // Set track metadata
    this.trackId = track.id;
    this.trackName = track.name;
    this.trackCover = track.cover;
    this.trackBackground = track.background;

    const audio: MediaObject = this.media.create(track.url);

    audio.play();

    setInterval(() => {
      audio.getCurrentPosition().then((pos) => {
        this.timer = pos;
      });
    });

    this.duration = audio.getDuration();

    audio.onStatusUpdate.subscribe(status => {
      console.log("Audio Status " + status);

      switch (status) {
        case 0:
          this.playing = false;
          break;

        case 1:
          this.playing = false;
          break;

        case 2:
          this.playing = true;
          break;

        default:
          this.playing = false;
      }
    });

    this.pauseMedia = audio.pause;
  }

  pause() {
    this.pauseMedia();
  }

}
