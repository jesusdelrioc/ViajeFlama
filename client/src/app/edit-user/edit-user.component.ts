import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

user 
error:string;
  username:string;
  name:string;
  email:string;
   password:string;
   imgUrl: string;


  constructor(public userService:UserService ,private route:ActivatedRoute, public session:SessionService, private router:Router) {
    this.userService.getUserInfo()
    .subscribe(user => this.user = user)
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUser(params['id']);
    });
  }
  getUser(id) {
    this.userService.get(id)
      .subscribe((user) => {
        this.user = user;
        console.log(this.user)
      });

}
submitForm(id, form){
  console.log(form.value)
  console.log(id)
   console.log(this.user._id)
  this.userService.editUser(this.user._id, form.value)
  .subscribe(status => this.router.navigate([`/perfil`]) )
}
}
