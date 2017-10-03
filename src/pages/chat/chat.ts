import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ShareService } from '../services/ShareService';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private shareService: ShareService) {
  }

  ionViewDidLoad() {
    console.log("displayName: "+this.navParams.get('displayName'));
  }
  
}
