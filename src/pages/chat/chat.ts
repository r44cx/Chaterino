import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ShareService } from '../services/ShareService';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
<<<<<<< HEAD
  chatmessages: FirebaseListObservable<any[]>;
  newChatMessage = '';
  displayName = '';
=======
  
  title: String;
>>>>>>> 2651f8596c956d4b59d70240ac388934c66dd0a2

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public shareService: ShareService, public firebaseProvider: FirebaseProvider) {
  this.title = this.navParams.get('num');
  }

  ionViewDidLoad() {
    console.log("num: "+this.navParams.get('num'));
     

    this.firebaseProvider.addChatMessage("id", "message");
  }
  
    sendMessage() {

    }
   
}
