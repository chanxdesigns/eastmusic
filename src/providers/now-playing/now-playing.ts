import {Injectable} from '@angular/core';
import {Media, MediaObject} from "@ionic-native/media";

/**
 * Interface of the Track object
 */
interface ITrack {
  id: number,
  url: string,
  trackName: string,
  artists: string,
  albumName: string,
  albumCover: string,
  albumBackground: string
}

/*
  Generated class for the NowPlayingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NowPlayingProvider {

  // Audio Object
  private currAudio: MediaObject;

  // Track play status
  private playing: boolean = false;

  // ID of the track being played
  private id: number;

  // Name of the track being played
  private trackName: string;

  // Name of the artist
  private artists: string;

  // Name of the album the track is associated with
  private albumName: string;

  // URL of the album cover image
  private albumCover: string;

  // URL of the album background image
  private albumBackground: string;

  // Time elapsed of track being played
  private currPos: any;

  // Total duration of track in seconds
  private duration: number;

  // Pause track function reference
  private pauseMedia: any;

  /**
   * Inject Media in constructor
   * @param {Media} media
   */
  constructor(public media: Media) {
  }

  /**
   * Play the track and set default properties
   * @param {ITrack} track
   */
  play(track: ITrack) {
    if (this.currAudio) {
      this.currAudio.stop();
      this.currAudio.release();
    }

    // Set up the media
    const audio: MediaObject = this.media.create(track.url);

    // Set track metadata
    this.id = track.id;
    this.trackName = track.trackName;
    this.artists = track.artists;
    this.albumName = track.albumName;
    this.albumCover = track.albumCover;
    this.albumBackground = track.albumBackground;

    // Play the audio
    audio.play();

    // Set status to playing
    this.playing = true;

    // Get current pos every second
    // setInterval(() => {
    //   audio.getCurrentPosition().then((pos) => {
    //     this.currPos = pos;
    //   });
    // });
    this.currPos = audio.getCurrentPosition.bind(audio);

    // // Get total duration of the audio
    // this.duration = audio.getDuration();

    // Get audio status
    // audio.onStatusUpdate.subscribe(status => {
    //   switch (status) {
    //     case 0:
    //       this.playing = false;
    //       break;
    //
    //     case 1:
    //       this.playing = false;
    //       break;
    //
    //     case 2:
    //       this.playing = true;
    //       break;
    //
    //     default:
    //       this.playing = false;
    //   }
    // });

    // // On audio action success
    // audio.onSuccess.subscribe(data => {
    //   console.log("Onsucess fired: "+data);
    // });

    // On audio action fail
    // audio.onError.subscribe(err => {
    //   console.log("Onerr " + err);
    // });

    // On audio load failure

    // Store a reference to the current audio object;
    this.currAudio = audio;
  }

  /**
   * Toggle status of the track being played
   */
  togglePlayPause() {
    if (this.playing) {
      this.currAudio.pause();
      this.playing = false;
    }
    else {
      this.currAudio.play();
      this.playing = true;
    }
  }

  seekTo(secs:number) {
    let val = secs * 1000;
    this.currAudio.seekTo(val);
  }

  /**
   * Get current track status
   * @returns {boolean}
   */
  getStatus() {
    return this.playing;
  }

  /**
   * Get current track id
   * @returns {number}
   */
  getTrackId() {
    return this.id;
  }

  /**
   * Get current position of the track
   * @returns {number}
   */
  getCurrPos() {
    return this.currPos;
  }

  /**
   * Get track name
   * @returns {string}
   */
  getName() {
    return this.trackName;
  }

  /**
   * Get track artists name
   * @returns {string}
   */
  getArtists() {
    return this.artists;
  }

  /**
   * Get album name
   * @returns {string}
   */
  getAlbumName() {
    return this.albumName;
  }

  /**
   * Get album cover image
   * @returns {string}
   */
  getAlbumCover() {
    return this.albumCover;
  }

  /**
   * Get album background image
   * @returns {string}
   */
  getAlbumBackgroundImage() {
    return this.albumBackground;
  }

  /**
   * Get current tarck duration
   * @returns {number}
   */
  getTrackDuration() {
    return this.duration;
  }

}
