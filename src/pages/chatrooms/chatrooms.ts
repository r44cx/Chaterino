import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ShareService } from '../services/ShareService';

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
  
}
