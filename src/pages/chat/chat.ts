import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ShareService } from '../services/ShareService';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  chatMessages: FirebaseListObservable<any[]>;
  displayName: String;
  chatMessage: String;
  title: String;
  image: String;
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL, // FILE_URI
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public shareService: ShareService, public firebaseProvider: FirebaseProvider, public camera: Camera) {
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
    this.chatMessages.push({ sender: this.displayName, message: this.chatMessage, time: new Date().getTime() });
    this.chatMessage = ""; 
  }
 
  async taskPicture(): Promise<any> {
    try {
      this.image = await this.camera.getPicture(this.options);
      console.log("this.image: "+this.image);
    } catch(e) {
      console.error(e);
    }
  }
}
