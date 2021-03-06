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
import { EditUserComponent } from './edit-user/edit-user.component';
import { ForecastComponent } from './forecasts/forecast.component';
import { listService } from '../services/list.service';
import { ContactComponent } from './contact/contact.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupComponent,
    HomeComponent,
    PerfilComponent,
    InicioComponent,
    ForecastComponent,
    EditUserComponent,
    ContactComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule

  ],
  providers: [SessionService, UserService, WeatherService, listService],
  bootstrap: [AppComponent]
})
export class AppModule { }
