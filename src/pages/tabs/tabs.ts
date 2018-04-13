import { Component, ViewChild} from '@angular/core';

import { Tabs, Slides, NavController, Platform } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import { ReaderPage } from '../reader/reader';
import { SearchPage } from '../search/search';

import { GlobalService } from '../../services/global-service';


@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  tab1Root = HomePage;
  tab2Root = ReaderPage;
  tab3Root = SearchPage;
  tab4Root = SettingsPage;

  activeHymnal: string;
  activeHymn: string;

  @ViewChild('#myTabs') public tabRef: Tabs;

  hideIntro: boolean = false;

  constructor(myGlobal : GlobalService, private navCtrl: NavController, private platform: Platform) {
    this.activeHymnal = myGlobal.getActiveHymnal();

    let intro = window.localStorage.getItem('intro');
    if(intro)
      this.hideIntro = intro == 'true';
    else
      window.localStorage.setItem('intro', 'true');
  }

  tabChange(event){
    /*this.platform.registerBackButtonAction(() => {
      this.navCtrl.push(event);
    });*/
  }

  ionViewDidLoad(){
    /*this.platform.registerBackButtonAction(() => {
      this.navCtrl.push(this.tab1Root);
    })*/
  }
}
