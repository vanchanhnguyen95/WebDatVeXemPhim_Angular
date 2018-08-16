import { Component, OnInit } from '@angular/core';
import { NguoiDung } from '../../../models/nguoi-dung';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-trangchu-header',
  templateUrl: './trangchu-header.component.html',
  styleUrls: ['./trangchu-header.component.css']
})
export class TrangchuHeaderComponent implements OnInit {

  private isLogin: boolean = false;
  private userLogin: NguoiDung;
  private isAdmin: boolean;
  private trangChu: boolean;

  constructor(private router: Router) {
    router.events.subscribe(
      (val) => {
        if (val instanceof NavigationEnd){
          if (localStorage.getItem("UserLogin")){
            this.isLogin = true;
            this.userLogin = JSON.parse(localStorage.getItem("UserLogin"));
            if (this.userLogin.MaLoaiNguoiDung === "QuanTri"){
              this.isAdmin = true;
            }
            else {
              this.isAdmin = false;
            }
          }
          else{
            this.isLogin = false;
          }
          if ((val.url == "/trangchu") || (val.url == "/")){
            this.trangChu = true;
          }
          else{
            this.trangChu = false;
          }
        }
      }
    )
  }

  ngOnInit() {

  }

  Thoat(){
    localStorage.clear();
    localStorage.removeItem("UserLogin");
    location.reload();
    window.location.reload(false); 
    // this.router.navigate(["/trangchu"]);
  }

  DomThe(id: string){
    if ((this.router.url == "/trangchu") ||  (this.router.url == "/")){
      var elmnt = document.getElementById(id);
      elmnt.scrollIntoView({behavior: "smooth", block: "start"});
    }
    else {
      this.router.navigate(['/trangchu']);
    }
  }
}
