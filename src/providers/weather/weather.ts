import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {

  apikey ='83d6706634cff3e4';
  url;

  constructor(public http: Http) {
    this.url = `http://api.wunderground.com/api/${this.apikey}/conditions/q`;
  }

  getWeather = (city , state)=>{
    return this.http.get(`${this.url}/${state}/${city}.json`).
    map(res=>res.json());
  }

}
