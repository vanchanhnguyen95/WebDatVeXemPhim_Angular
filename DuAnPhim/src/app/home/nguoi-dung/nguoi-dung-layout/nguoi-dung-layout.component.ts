import { Component, OnInit } from '@angular/core';
import { NguoiDung } from '../../../models/nguoi-dung';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-nguoi-dung-layout',
  templateUrl: './nguoi-dung-layout.component.html',
  styleUrls: ['./nguoi-dung-layout.component.css']
})
export class NguoiDungLayoutComponent implements OnInit {

  private isLogin: boolean = false;
  private userLogin: NguoiDung;
  private isAdmin: boolean;
  private trangChu: boolean;

  constructor(private router: Router) {
    router.events.subscribe(
      (val) => {
        if (val instanceof NavigationEnd) {
          if (localStorage.getItem("UserLogin")) {
            this.isLogin = true;
            this.userLogin = JSON.parse(localStorage.getItem("UserLogin"));
            if (this.userLogin.MaLoaiNguoiDung === "QuanTri") {
              this.isAdmin = true;
            }
            else {
              this.isAdmin = false;
            }
          }
          else {
            this.isLogin = false;
          }
          if ((val.url == "/trangchu") || (val.url == "/")) {
            this.trangChu = true;
          }
          else {
            this.trangChu = false;
          }
        }
      }
    )
  }

  ngOnInit() {
    this.userLogin = JSON.parse(localStorage.getItem("UserLogin"));
  }

  DangXuat() {
    localStorage.removeItem("UserLogin");
    this.router.navigate(["/trangchu"]);
  }

  GoToElement(id: string) {
    if ((this.router.url == "/trangchu") || (this.router.url == "/")) {
      var elmnt = document.getElementById(id);
      elmnt.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    else {
      this.router.navigate(['/trangchu']);
    }
  }
}



