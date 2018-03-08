import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Forecast } from '../forecast'
import { WeatherService } from '../../services/weather.service';
import 'rxjs/Rx';
import { listService } from '../../services/list.service';
import { SessionService } from '../../services/session.service';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  list
  product
  error: string;

  constructor( public session: SessionService,private weatherService: WeatherService, public ListService:listService ) {
    this.ListService.getListInfo()
    .subscribe(list => this.list = list)
    console.log(listService)
   }

  forecastForm: FormGroup;
  cityForecast: Forecast[] = [];

  ngOnInit() {
    this.forecastForm = new FormGroup({
      forecastCity: new FormControl('')
    })
  }
  onSubmit() {
    this.weatherService.fiveDayForecast(this.forecastForm.value.forecastCity).subscribe((data) => {
        console.log("data")
        for (let i = 0; i<data.list.length; i+=8) {
          const temporary = new Forecast(data.list[i].dt_txt,
            data.list[i].weather[0].icon,
            data.list[i].main.temp_max,
            data.list[i].main.temp_min)
            this.cityForecast.push(temporary);
        }
      }
    );
  }
  logout() {
    this.session.logout()
      .catch(e => this.error = e)
      .subscribe();
  }
}