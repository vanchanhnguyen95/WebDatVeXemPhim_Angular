
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserAuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (!localStorage.getItem("UserLogin")) {
      this.router.navigate(['trangchu']);
      return false;
    }

    return true;
  };
}

