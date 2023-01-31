import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }


  getWeatherInfo(city:string,units:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3f1baaa6a83149ac06f285d5b62f5bdd&units=${units}`)
  }
}
