import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { ShareService } from '../../services/ShareService';
import { AfoListObservable, AfoObjectObservable, AngularFireOfflineDatabase } from 'angularfire2-offline/database';

@Injectable()
export class FirebaseProvider {

  constructor(public afod: AngularFireOfflineDatabase, public afd: AngularFireDatabase, public shareService: ShareService) { }

  getChatrooms() {
    console.log('getting chatrooms...');
    //return this.afd.list('/chatrooms/');
    return this.afod.list('/chatrooms/');
    /*
    , {
      query: {
        limitToLast: 50
      }
    }
    */
  }

  getChatMessages(chatroom) {
    console.log('getting chatMessages...');
    //return this.afd.list('/chatrooms/'+chatroom+'/messages');
    //return this.afod.list('/chatrooms/'+chatroom+'/messages');
    return this.afod.list('/chatrooms/' + chatroom + '/messages',
      {
        query: {
          orderByChild: 'time',
          limitToLast: 50
        }
      });
    /*var ordered: 
    items.forEach((item) => {
      ordered.
      console.log(item);
    });*/
  }

  addChatrooms(name) {
    //this.afd.list('/chatrooms/').push(name);
    this.afod.list('/chatrooms/').push(name);
  }

  /*removeChatrooms(id) {
    this.afd.list('/chatrooms/').remove(id);
  }*/

  addChatMessage(chatroom, message) {

    //console.log("fb:" +this.shareService.getDisplayName());
  }
}