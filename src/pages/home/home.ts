import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WeatherProvider} from '../../providers/weather/weather';
import {Storage} from '@ionic/storage';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {
  weather : any;
  location : {
    state: string,
    city: string
  }

  constructor(public navCtrl : NavController, private weatherProvider : WeatherProvider, private storage : Storage) {}
  
  getLocation=(location)=>{
    this
    .weatherProvider
    .getWeather(location.city, location.state)
    .subscribe(response => {
      this.weather = response.current_observation;
    })
  }
  ionViewWillEnter = () => {    
    this
      .storage
      .get('location')
      .then(location => {
        this.location = location
          ? location
          : {
            state: 'FL',
            city: 'Miami'
          }
          if(!location)
            this.storage.set('location',this.location);
          this.getLocation(this.location);
      })
      .catch(error => {
        console.log(error);
      });     
     
  }

}
