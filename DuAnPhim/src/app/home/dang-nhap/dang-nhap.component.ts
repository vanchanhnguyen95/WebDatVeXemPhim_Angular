import { Component, OnInit, OnDestroy } from '@angular/core';
import { NguoiDung } from '../../models/nguoi-dung';
import { NguoiDungService } from '../../services/nguoi-dung.service';
import { Subscription } from '../../../../node_modules/rxjs';

import swal from 'sweetalert2';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit, OnDestroy {

  private subNguoiDung: Subscription;
  private loginFail: boolean = false;

  constructor(private nguoiDungService: NguoiDungService,
    private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  DangNhap(nguoiDung: NguoiDung) {
    this.subNguoiDung = this.nguoiDungService.DangNhap(nguoiDung.TaiKhoan, nguoiDung.MatKhau).subscribe(
      data => {
        if (data !== "Tài khoản hoặc mật khẩu không đúng !") {
          swal({
            position: 'top',
            type: 'success',
            title: 'Đăng nhập thành công!',
            showConfirmButton: false,
            timer: 1500
          }).then(
            result => {
              this.loginFail = false;
              // Luu store
              localStorage.setItem("UserLogin", JSON.stringify(data));
              this.router.navigate(["/trangchu"]);
            }
          )
        }
        else {
          this.loginFail = true;
        }

      },
      error => {
        console.log(error);
      }
    )

  }

}
