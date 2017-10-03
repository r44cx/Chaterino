import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AnmeldenPage } from '../pages/anmelden/anmelden';

import { ShareService } from '../pages/services/ShareService';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  templateUrl: 'app.html',
  providers: [ShareService]
})
export class MyApp {
  title = 'app';
  
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  
  rootPage:any = AnmeldenPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, shareService: ShareService, public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.afAuth.auth.signInAnonymously();
    
    this.items = af.list('/chatrooms', {
      query: {
        limitToLast: 50
      }
    });
  
    this.user = this.afAuth.authState;
  }
  
  Send(desc: string) {
    this.items.push({ name: desc});
    this.msgVal = '';
}
}
