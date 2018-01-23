import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{AngularFireDatabase} from 'angularfire2/database';
import{HomePage} from '../home/home';
import { MenuController } from 'ionic-angular';
import { Content } from 'ionic-angular';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild(Content) content: Content;
username:string='';s
message:string='';
phone:any='';
_chatSubscription;
messages:object []=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase) {
this.phone=this.navParams.get('phoneNumber');
    this.username=this.navParams.get('username');
  this._chatSubscription=this.db.list('/chat').valueChanges().subscribe( data=>{
   this.messages=data;
  });
  }
sendMessage()
{
  this.db.list('/chat').push({
    username:this.username,
    message:this.message,
    phoneNumber:this.phone
  }).then(() =>{}
  //message is sent
)
this.content.scrollToBottom(200);
  this.message='';
}
  ionViewWillLeave() {
    console.log('user is about to go');
    this._chatSubscription.unsubscribe();
    this.db.list('/chat').push({
      specialMessage:true,
      message:`${this.username} has left the Chat`
    })
  }
  ionViewDidLoad()
  {
    this.content.scrollToBottom(200);
this.db.list('/chat').push({
  specialMessage:true,
  message:`${this.username} has joined the Chat`
})
  }
}
