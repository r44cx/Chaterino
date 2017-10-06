import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ShareService } from '../services/ShareService';

//import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
//import { AngularFireAuth } from 'angularfire2/auth';
//import { Observable } from 'rxjs/Observable';
//import * as firebase from 'firebase/app';
import { FirebaseProvider } from '../providers/firebase/firebase';

import { AfoListObservable, AfoObjectObservable, AngularFireOfflineDatabase } from 'angularfire2-offline/database';

import { ChatPage } from '../chat/chat';
import { ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-chatrooms',
  templateUrl: 'chatrooms.html'
})
export class ChatroomsPage {
  @ViewChild(Content) chatroomContent: Content;
  chatrooms: AfoListObservable<any[]>;//FirebaseListObservable<any[]>;//
  newChatroom: String;
  searchTerm: String = ''
  filteredChatrooms: String[] = [];
  displayName = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public shareService: ShareService, public firebaseProvider: FirebaseProvider/*, public afAuth: AngularFireAuth, public af: AngularFireDatabase*/) {
    this.chatrooms = this.firebaseProvider.getChatrooms();
  }

  ionViewDidLoad() {
    this.setFilteredItems();
    this.displayName = this.shareService.getDisplayName();
    this.chatroomContent.scrollToBottom();

    /*this.afAuth.auth.signInAnonymously();
    
    this.chatrooms = this.af.list('/chatrooms', {
      query: {
        limitToLast: 50
      }
    });*/
    //this.items = FirebaseListObservable<any[]>;snapshots
  }

  setFilteredItems() {
    this.chatrooms.subscribe(snapshots => {
      /*snapshots.forEach(snapshot => {
        console.log(snapshot.name);
      });*/
      console.log("fc: " + this.filteredChatrooms);
      this.filteredChatrooms = snapshots.filter(snapshot => {
        console.log("bla", snapshot.name.toLowerCase().indexOf(this.searchTerm));
        return snapshot.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
      console.log(this.filteredChatrooms);
    });

    /*
    this.chatrooms.filter((item) => {
      console.log("item: " + item);
      item.forEach((val) => {
        console.log("fE: " + val);
      })
      //return item..toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      return null;
    });*/
  }

  goToChat(num) {
    if (!num)
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
