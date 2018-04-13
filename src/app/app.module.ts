import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GlobalService } from '../services/global-service';
import { UserService } from '../services/user-service';

//import { KeyboardComponent } from '../components/keyboard/keyboard';

import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { ReaderPage } from '../pages/reader/reader';
import { SearchPage } from '../pages/search/search';
import { InputModalPage } from '../pages/input-modal/input-modal';
import { AuthorModalPage } from '../pages/author-modal/author-modal';
import { RevisionsModalPage } from '../pages/revisions-modal/revisions-modal';
import { SettingsPopoverPage } from '../pages/settings-popover/settings-popover';
import { TunePopoverPage } from '../pages/tune-popover/tune-popover';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPopoverItemsPage } from '../pages/settings-popover-items/settings-popover-items';
import { SettingsPopoverListPage } from '../pages/settings-popover-list/settings-popover-list';
import { ImageMakerPage } from '../pages/image-maker/image-maker';
import { IntroSliderComponent } from '../components/intro-slider/intro-slider';
import { MidiPopoverPage } from '../pages/midi-popover/midi-popover';
import { LoginModalPage } from '../pages/login-modal/login-modal';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Insomnia } from '@ionic-native/insomnia';
import { Network } from '@ionic-native/network';
import { MusicControls } from '@ionic-native/music-controls';


@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    ReaderPage,
    SearchPage,
    HomePage,
    TabsPage,
    InputModalPage,
    SettingsPopoverPage,
    AuthorModalPage,
    RevisionsModalPage,
    TunePopoverPage,
    SettingsPopoverItemsPage,
    SettingsPopoverListPage,
    ImageMakerPage,
    IntroSliderComponent,
    MidiPopoverPage,
    LoginModalPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    CommonModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    HomePage,
    ReaderPage,
    SearchPage,
    TabsPage,
    InputModalPage,
    SettingsPopoverPage,
    AuthorModalPage,
    RevisionsModalPage,
    TunePopoverPage,
    SettingsPopoverItemsPage,
    SettingsPopoverListPage,
    ImageMakerPage,
    IntroSliderComponent,
    MidiPopoverPage,
    LoginModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Insomnia,
    File,
    FileTransfer,
    Network,
    MusicControls,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalService,
    UserService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig }
  ]
})
export class AppModule {}

declare var Hammer: any;

export class HammerConfig extends HammerGestureConfig{
  buildHammer(element: HTMLElement){
    let mc = new Hammer(element, {
      touchAction: "pan-y",
    });
    return mc;
  }
}
