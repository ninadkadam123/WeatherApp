import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

  myWeather:any
  temperature:number=0;
  feelsLikeTemperature:number=0;
  humidity:number=0;
  pressure:number=0;
  summary:string=''
  iconURL:string=''
  city:string='Malvan'
  units:string='metric'

   constructor(private weatherservice:WeatherService){

   }

   
  ngOnInit(): void {
    
  //   this.weatherservice.getWeatherInfo(this.city,this.units).subscribe({

  //     next:(res)=>{
  //       console.log(res);
  //       this.myWeather=res;
  //       this.temperature=this.myWeather.main.temp;
  //       this.feelsLikeTemperature=this.myWeather.main.feels_like;
  //       this.humidity=this.myWeather.main.humidity;
  //       this.pressure=this.myWeather.main.pressure
  //       this.summary=this.myWeather.weather[0].main;
  //       this.iconURL= 'http://openweathermap.org/img/wn/'+ this.myWeather.weather[0].icon+'@2x.png'
  //     },

  //     error:(err)=>console.log(err.message),

  //     complete:()=>console.info('API call Completed')
      
  //   })
   }

}
