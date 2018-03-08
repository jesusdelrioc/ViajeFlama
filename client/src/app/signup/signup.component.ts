import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username:string;
  email:string;
  password:string;
  error:string;
  constructor(public session:SessionService, private router: Router) { }

  ngOnInit() {
  }

  signup(){
    this.session.signup(this.username,this.email,this.password).subscribe(user => {
      console.log(user);
      this.router.navigate(["/home"]);
    }, err => (this.error = err));
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }

}