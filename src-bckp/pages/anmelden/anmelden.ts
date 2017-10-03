import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatroomsPage } from '../chatrooms/chatrooms';

@Component({
  selector: 'page-anmelden',
  templateUrl: 'anmelden.html'
})
export class AnmeldenPage {

  constructor(public navCtrl: NavController) {
  }
  goToChatrooms(params){
    if (!params) params = {};
    this.navCtrl.push(ChatroomsPage);
  }
}
