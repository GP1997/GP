import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ChatPage} from '../chat/chat';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string='';
  phoneNumber:number;
  constructor(public navCtrl: NavController,private alertCtrl:AlertController) {
  }
  showalert(title:string,message:string) {
    let alertBox = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Ok']
    });
    alertBox.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  loginUser(){
    if(/^[a-zA-Z0-9]+$/.test(this.username))
    {
      let form={username:this.username,
        phoneNumber:this.phoneNumber
        }
this.navCtrl.push(ChatPage,form)
    }
      else{
        this.showalert('Error','Invalid Username')

      }
    }}
  
