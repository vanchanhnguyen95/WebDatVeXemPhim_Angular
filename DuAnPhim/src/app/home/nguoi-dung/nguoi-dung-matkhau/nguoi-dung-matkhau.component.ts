import { Component, OnInit, ViewChild } from '@angular/core';

import swal from 'sweetalert2';
import { NguoiDung } from '../../../models/nguoi-dung';
import { NguoiDungService } from '../../../services/nguoi-dung.service';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-nguoi-dung-matkhau',
  templateUrl: './nguoi-dung-matkhau.component.html',
  styleUrls: ['./nguoi-dung-matkhau.component.css']
})
export class NguoiDungMatkhauComponent implements OnInit {

  @ViewChild("formDoiMatKhau") formDoiMatKhau: any;

  private matKhauHienTai: string;
  private matKhauMoi: string;
  private matKhauNhapLai: string;
  private userLogin: any;
  private nguoiDung: NguoiDung = new NguoiDung();
  private subNguoiDung: Subscription;

  constructor(private nguoiDungService: NguoiDungService) { }

  ngOnInit() {
    this.userLogin = JSON.parse(localStorage.getItem("UserLogin"));

    this.nguoiDung.TaiKhoan = this.userLogin.TaiKhoan;
    this.nguoiDung.HoTen = this.userLogin.HoTen;
    this.nguoiDung.MatKhau = this.userLogin.MatKhau;
    this.nguoiDung.Email = this.userLogin.Email;
    this.nguoiDung.SoDT = this.userLogin.SoDT;
    this.nguoiDung.MaNhom = 'GP02';
    this.nguoiDung.MaLoaiNguoiDung = this.userLogin.MaLoaiNguoiDung;
  }

  DoiMatKhau() {
    if (this.formDoiMatKhau.form.valid && this.matKhauMoi == this.matKhauNhapLai) {
      if (this.matKhauHienTai !== this.nguoiDung.MatKhau) {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Mật khẫu hiện tại không đúng!'
        })
      }
      else {
        this.nguoiDung.MatKhau = this.matKhauMoi;

        this.subNguoiDung = this.nguoiDungService.CapNhatNguoiDung(this.nguoiDung).subscribe(
          result => {
            swal(
              'Cập nhật thành công!',
              'Đổi mật khẩu thành công!',
              'success'
            ).then(
              data => {
                // Luu lai nguoi dung vao local store
                this.userLogin.MatKhau = this.nguoiDung.MatKhau;

                localStorage.setItem("UserLogin", JSON.stringify(this.userLogin));

                location.reload();
              }
            );
          },
          error => {
            console.log(error);
          }
        )
      }
    }
    else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Thông tin nhập vào không hợp lệ, vui lòng kiểm tra lại!'
      })
    }
  }
}

