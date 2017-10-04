import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ChatroomsPage } from '../chatrooms/chatrooms';
import { ShareService } from '../services/ShareService';

/**
 * Note: after starting the server, a restart has to be triggered by saving a file (otherwise Angular seems to fail which leads to this.displayName not being found)
 */
@Component({
  selector: 'page-anmelden',
  templateUrl: 'anmelden.html'
})
export class AnmeldenPage {
  displayName = '';

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public shareService: ShareService) {
  }

  goToChatrooms(params){
    if (!params) params = {};
    
    // this.displayName not set when there is no value
    if(!this.displayName || this.displayName.length < 1)
      return alert("Bitte gib deinen Namen ein.");
    
    /*let modal = this.modalCtrl.create(ChatroomsPage);
    modal.present();*/

    this.shareService.setDisplayName(this.displayName);

    this.navCtrl.push(ChatroomsPage);
  }
}
