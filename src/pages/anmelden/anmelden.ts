import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ChatroomsPage } from '../chatrooms/chatrooms';
import { ShareService } from '../services/ShareService';

@Component({
  selector: 'page-anmelden',
  templateUrl: 'anmelden.html'
})
export class AnmeldenPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private shareService: ShareService) {
  }
  goToChatrooms(params){
    if (!params) params = {};
    
    // this.displayName not set when there is no value
    if(!this.displayName || this.displayName.length < 1)
      return alert("Bitte gib deinen Namen ein.");
    
    let data = {
      displayName: this.displayName
    };

    /*TEST let modal = this.modalCtrl.create(ChatroomsPage);
    modal.present();*/

    this.shareService.setDisplayName(this.displayName);

    this.navCtrl.push(ChatroomsPage, data);
  }
}
