import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, ModalController, Platform } from 'ionic-angular';
import { RevisionsModalPage } from '../../pages/revisions-modal/revisions-modal';
import { AuthorModalPage } from '../../pages/author-modal/author-modal';

import { GlobalService } from '../../services/global-service';

import { File } from '@ionic-native/file';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  revisionString : string;
  recentNum: number;

  recentSubscribe: any;
  constructor(public navCtrl: NavController, private http: Http, private revisionsModal: ModalController, private authorModal: ModalController, private global: GlobalService,  private platform: Platform, private file: File) {
    this.recentSubscribe = global.historyCountChange.subscribe(value =>{
      console.log(value);
    })
  }

  ionViewDidLoad() {
    this.recentNum = this.global.getRecentCount();

    let url = "";
    if(this.platform.is('cordova')){
        this.platform.ready().then(() => {
          url = this.file.applicationDirectory + 'www/assets/revision.html';
          this.http.get(url).map(res => res).subscribe(res => {
            this.revisionString = res["_body"];
          })
        })
    }
    else{
      url = '../assets/revision.html';
      this.http.get(url).map(res => res).subscribe(res => {
        this.revisionString = res["_body"];
      })
    }
  }

  showRevisionModal(){
    let revModal = this.revisionsModal.create(RevisionsModalPage, {
      "revisionString": this.revisionString
    });
    revModal.present();
  }

  showAuthorModal(){
    let authModal = this.authorModal.create(AuthorModalPage);
    authModal.present();
  }

  recentChange(){
    this.global.setRecentCount(this.recentNum);
  }
}
