import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { CurrentWeather } from '../current.weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myWeather: CurrentWeather;
  location
  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.myWeather = this.ws.weatherNow();
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.ws.localWeather(lat, lon).subscribe(
        (data) => {
          console.log(data);
          this.myWeather = new CurrentWeather(data.name,
            data.main.temp,
            data.weather[0].icon,
            data.weather[0].description,
            data.main.temp_max,
            data.main.temp_min)
        }
      )
    })
  }
  onSubmit(weatherForm:NgForm){
this.ws.anotherCityWeather(weatherForm.value.city).subscribe((data)=>{
  this.myWeather = new CurrentWeather(data.name,
    data.main.temp,
    data.weather[0].icon,
    data.weather[0].description,
    data.main.temp_max,
    data.main.temp_min)
})
  }

}