import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ShareService } from '../services/ShareService';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-chatrooms',
  templateUrl: 'chatrooms.html'
})
export class ChatroomsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private shareService: ShareService) {
  }

  ionViewDidLoad() {
    //console.log("displayName-navParams: "+this.navParams.get('displayName'));
    this.displayName = this.shareService.getDisplayName();
    console.log("displayName: "+this.displayName);
  }

  goToChat(num) {
    if(!num)
      return alert("Something went wrong!");
    
    let data = {
       num: num
    };

    this.navCtrl.push(ChatroomsPage, data);
  }
  
}
