import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ShareService } from '../services/ShareService';

//import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
//import { AngularFireAuth } from 'angularfire2/auth';
//import { Observable } from 'rxjs/Observable';
//import * as firebase from 'firebase/app';
import { FirebaseProvider } from '../providers/firebase/firebase';

import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-chatrooms',
  templateUrl: 'chatrooms.html'
})
export class ChatroomsPage {
  chatrooms: FirebaseListObservable<any[]>;
  newChatroom: String;
  displayName = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public shareService: ShareService, public firebaseProvider: FirebaseProvider/*, public afAuth: AngularFireAuth, public af: AngularFireDatabase*/) {
    this.chatrooms = this.firebaseProvider.getChatrooms();
  }
 
  ionViewDidLoad() {
    this.displayName = this.shareService.getDisplayName();

    /*this.afAuth.auth.signInAnonymously();
    
    this.chatrooms = this.af.list('/chatrooms', {
      query: {
        limitToLast: 50
      }
    });*/
    //this.items = FirebaseListObservable<any[]>;
  }

  goToChat(num) {
    if(!num)
      return alert("Something went wrong!");
    
    let data = {
       num: num
    };

    this.navCtrl.push(ChatPage, data);
  }
  
  addItem() {
    this.firebaseProvider.addChatrooms(this.newChatroom);
  }
 
  /*removeItem(id) {
    this.firebaseProvider.removeChatroom(id);
  }*/
}
