import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
 
  user

  constructor(public userService:UserService) { 
    this.userService.getUserInfo()
    .subscribe(user => this.user = user)
    console.log(userService)
  }
 
  ngOnInit() {
  }

 

}