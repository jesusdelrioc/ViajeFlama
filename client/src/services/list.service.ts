import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';



interface list {
    name: string,
    WeatherText: string,
    temperature: Number

}
@Injectable()
export class listService {

    BASEURL: string = environment.BASEURL;
    options: object = { withCredentials: true };

    constructor(private http: Http) { }

    public list: list;
    
    getList(){
        return this.list;
      }
    handleError(e) {
        console.log(e);
        return Observable.throw(e.json().message);
    }

    getListInfo() {
        return this.http.get(`${this.BASEURL}/api/product/list`, this.options)
            .map(res => res.json())
            .catch(this.handleError);
    }
}