import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { ShareService } from '../../services/ShareService';
 
@Injectable()
export class FirebaseProvider {
 
  constructor(public afd: AngularFireDatabase, public shareService: ShareService) { }
 
  getChatrooms() {
    return this.afd.list('/chatrooms/');
    /*
    , {
      query: {
        limitToLast: 50
      }
    }
    */
  }
 
  addChatrooms(name) {
    this.afd.list('/chatrooms/').push(name);
  }
 
  /*removeChatrooms(id) {
    this.afd.list('/chatrooms/').remove(id);
  }*/

  addChatMessage(chatroom, message) {
      console.log("fb:" +this.shareService.getDisplayName());
  }
}