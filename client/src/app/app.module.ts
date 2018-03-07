import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';

import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from "./routes";
import { PerfilComponent } from './perfil/perfil.component';
import { InicioComponent } from './inicio/inicio.component';
import { WeatherService } from '../services/weather.service';
import { ForecastComponent } from './forecast/forecast.component';
import { EditUserComponent } from './edit-user/edit-user.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupComponent,
    HomeComponent,
    PerfilComponent,
    InicioComponent,
  ForecastComponent,
  EditUserComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule

  ],
  providers: [SessionService, UserService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
