import { Component } from '@angular/core';
import {Platform} from "ionic-angular";
import { NavController } from "ionic-angular";
import { Media, MediaObject } from "@ionic-native/media";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private tracks: Array<Object>;

  constructor(public platform: Platform, public navCtrl: NavController, private media: Media) {
    this.tracks = [
      {
        name: "Hallakkho",
        url: "gogle"
      },
      {
        name: "Ngammadi Phajou",
        url: "none"
      }
    ];
  }

  playNow(track: Object) {
    this.navCtrl.push();
  }
}
