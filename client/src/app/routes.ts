import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InicioComponent } from './inicio/inicio.component';

import { EditUserComponent } from './edit-user/edit-user.component';
import { ForecastComponent } from './forecasts/forecast.component';
import { ContactComponent } from './contact/contact.component';
    
export const routes: Routes = [
    { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
    { path: '',  component: InicioComponent , pathMatch: 'full' },
    { path: 'signup',  component: SignupComponent,pathMatch: 'full'  },
    { path: 'login',   component: LoginFormComponent ,pathMatch: 'full' },
    { path: 'home',  component: ForecastComponent , pathMatch: 'full' },
    { path: 'perfil',  component: PerfilComponent , pathMatch: 'full' },
    { path: 'edit/:id',  component: EditUserComponent , pathMatch: 'full' },
    { path: 'contacto',  component: ContactComponent , pathMatch: 'full' },



  ];

