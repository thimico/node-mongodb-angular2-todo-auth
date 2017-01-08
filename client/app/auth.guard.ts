import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import {Auth} from "./services/auth.service"


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (tokenNotExpired()) {
        console.log('AUTH GUARD PASSED');
      return true;
    }
    console.log('BLOCKED BY AUTH GUARD');
    this.router.navigate(['/']);
    return false;
  }
}