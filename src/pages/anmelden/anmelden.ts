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

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private shareService: ShareService) {
  }
  goToChatrooms(params){
    if (!params) params = {};
    
    // this.displayName not set when there is no value
    if(!this.displayName || this.displayName.length < 1)
      return alert("Bitte gib deinen Namen ein.");
    
<<<<<<< HEAD
    let data = {
      displayName: this.displayName
    };

    /*TEST let modal = this.modalCtrl.create(ChatroomsPage);
=======
    /*let modal = this.modalCtrl.create(ChatroomsPage);
>>>>>>> e02bca1a68a73a4d3d16fe812f7b453d821e0a4c
    modal.present();*/

    this.shareService.setDisplayName(this.displayName);

    this.navCtrl.push(ChatroomsPage);
  }
}
