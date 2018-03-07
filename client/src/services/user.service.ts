import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';



interface User {
  name: string,
  username: string,
  email: String,
  password: string
}

@Injectable()
export class UserService {

  BASEURL:string= environment.BASEURL;
  options: object = { withCredentials: true };

  constructor(private http: Http) { }

  private user: User;

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }
  get(id) {
    console.log("holi");
    return this.http
      .get(`${this.BASEURL}/api/user/${id}`)
      .map(res => res.json());
  }
  editUser(id, form) {
    console.log("asjh")
    console.log(form)
    return this.http.put(`${this.BASEURL}/api/usuario/edit/${id}`, { form }, this.options);
  }

  getUserInfo(): Observable<any> {
    return this.http.get(`${this.BASEURL}/api/usuario`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

}