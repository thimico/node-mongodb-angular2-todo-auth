import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {AUTH_PROVIDERS} from 'angular2-jwt';

import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {TasksComponent} from './components/tasks/tasks.component';

import {Auth} from './services/auth.service';
import {AuthGuard} from './auth.guard';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule  ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent, TasksComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth,
    AuthGuard
  ]

})
export class AppModule { }
