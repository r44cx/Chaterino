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
  chatMessages: FirebaseListObservable<any[]>;
  displayName: String;
  chatMessage: String;
  title: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public shareService: ShareService, public firebaseProvider: FirebaseProvider) {
    this.title = this.navParams.get('num');
    this.chatMessages = this.firebaseProvider.getChatMessages(this.navParams.get('num'));
    this.displayName = this.shareService.getDisplayName();

  }
 
  ionViewDidLoad() {
    console.log("num: "+this.navParams.get('num'));
     

    this.firebaseProvider.addChatMessage("id", "message");
  }
  
  sendMessage() {
    console.log("this.displayName: "+this.displayName+", this.chatMessage: "+this.chatMessage);
    this.chatMessages.push({ sender: this.displayName, message: this.chatMessage});
    this.chatMessage = "";

    
  }
   
}
