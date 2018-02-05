import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WeatherProvider} from '../../providers/weather/weather';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {
  weather : any;
  location : {
    state: string,
    city: string
  }

  constructor(public navCtrl : NavController, private weatherProvider : WeatherProvider) {}

  ionViewWillEnter = () => {
    this.location = {
      state: 'FL',
      city: 'Miami'
    }
    this
      .weatherProvider
      .getWeather(this.location.city, this.location.state)
      .subscribe(response => {
        console.log(response);
        this.weather = response.current_observation; 
      })
  }

}
