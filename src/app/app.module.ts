import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';
import { NowPlayingProvider } from '../providers/now-playing/now-playing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NowPlayingPage } from "../pages/now-playing/now-playing";
import {Media} from "@ionic-native/media";
import {NowPlayingControlBarComponent} from "../components/now-playing-control-bar/now-playing-control-bar";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NowPlayingPage,
    NowPlayingControlBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NowPlayingPage,
    NowPlayingControlBarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Media,
    File,
    NowPlayingProvider
  ]
})
export class AppModule {}
