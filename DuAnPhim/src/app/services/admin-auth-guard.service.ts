// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminAuthGuardService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean{
    if (localStorage.getItem("UserLogin")){
      let user = JSON.parse(localStorage.getItem("UserLogin"));
      if (user.MaLoaiNguoiDung === "KhachHang"){
        this.router.navigate(['trangchu']);
        return false;
      }

      return true;
    }

    return true;
  };
}
