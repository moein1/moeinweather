import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city : string;
  state : string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private storage : Storage) {
       this.storage.get('location').
       then(location=>{
        if(location){
          this.city = location.city;
          this.state = location.state;
        }else{
          this.city = 'Miami';
          this.state ='FL';
          this.storage.set('location',{state : 'FL' , city : 'Miami'});
        }
       })      
  }

  saveForm = ()=>{
    this.storage.set('location' , {state : this.state , city : this.city});
    this.navCtrl.push(HomePage);

  }

}
