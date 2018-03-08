import { Injectable } from '@angular/core';
import { CurrentWeather } from '../app/current.weather';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx'
import { Forecast} from '../app/forecast';
import { environment }  from '../environments/environment';


@Injectable()
export class WeatherService {
    current: CurrentWeather = new CurrentWeather('New York', '26', 'http://weather.omgez911.com/icons/{{myWeather.icon}}.png', 'sunny', '36', '22')
    constructor(private http: Http) { }

    weatherNow() {
        return this.current;
    }

    localWeather(lat: string, lon: string) {
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3a2fa31c2fa01c3d4b82e867934da866&units=metric`).map((response: Response) => response.json());
    }
    anotherCityWeather(city: string) {
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a2fa31c2fa01c3d4b82e867934da866&units=metric`).map((response: Response) => response.json());
    }
    fiveDayForecast(city: string) {
        return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3a2fa31c2fa01c3d4b82e867934da866&units=metric`).map((response: Response) => response.json());
    }
}