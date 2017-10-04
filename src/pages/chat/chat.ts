import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ShareService } from '../services/ShareService';
import { FirebaseProvider } from '../providers/firebase/firebase';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public shareService: ShareService, public firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log("num: "+this.navParams.get('num'));

    this.firebaseProvider.addChatMessage("id", "message");
  }
  
}
