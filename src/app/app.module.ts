import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {ChatPage} from '../pages/chat/chat';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import{ AngularFireModule,FirebaseAppConfig} from 'angularfire2';

const firebaseConfig:FirebaseAppConfig={
  apiKey: "AIzaSyBfQRgL8SVxS6UAW94MaHPemnRU4A3euNE",
  authDomain: "chat-e06c8.firebaseapp.com",
  databaseURL: "https://chat-e06c8.firebaseio.com",
  projectId: "chat-e06c8",
  storageBucket: "chat-e06c8.appspot.com",
  messagingSenderId: "311624002904"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
