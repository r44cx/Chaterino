import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AnmeldenPage } from '../pages/anmelden/anmelden';
import { ChatroomsPage } from '../pages/chatrooms/chatrooms';
import { ChatPage } from '../pages/chat/chat';
import { ShareService } from '../pages/services/ShareService';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Camera } from '@ionic-native/camera';

import { AngularFireModule } from 'angularfire2';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import { AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirebaseProvider } from '../pages/providers/firebase/firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyBfl-ZE0eOUSB45UlCFgJzrG5k3jnEfKkU",
  authDomain: "chaterino-v2.firebaseapp.com",
  databaseURL: "https://chaterino-v2.firebaseio.com",
  storageBucket: "chaterino-v2.appspot.com",
  messagingSenderId: "273495855874"
  // projectId: "chaterino-v2",
};

@NgModule({
  declarations: [
    MyApp,
    AnmeldenPage,
    ChatroomsPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireOfflineModule,
    AngularFireAuthModule,
//    AngularFirestoreModule.enablePersistence(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AnmeldenPage,
    ChatroomsPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    ShareService,
    AngularFireOfflineDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}