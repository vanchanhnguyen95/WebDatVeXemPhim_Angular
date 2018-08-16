import { Component, OnInit, ViewChild } from '@angular/core';
import { NguoiDung } from '../../models/nguoi-dung';
import { Subscription } from '../../../../node_modules/rxjs';
import { NguoiDungService } from '../../services/nguoi-dung.service';

import swal from 'sweetalert2';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {

  @ViewChild("formDangKy") formDangKy: any;

  private nguoiDung: NguoiDung = new NguoiDung();
  private subNguoiDung: Subscription;
  private matKhauNhapLai: string;

  constructor(private nguoiDungService: NguoiDungService,
              private router: Router) { }

  ngOnInit() {
  }

  DangKy(){
    if (this.formDangKy.form.valid && this.nguoiDung.MatKhau == this.matKhauNhapLai) {
      this.nguoiDung.MaLoaiNguoiDung = "KhachHang";
      this.nguoiDung.MaNhom = "GP02";

      this.subNguoiDung = this.nguoiDungService.DangKy(this.nguoiDung).subscribe(
        result => {
          if (result == "Tài khoản đã tồn tại"){
            swal(
              'Tài khoản đã tồn tại?',
              'Bạn thử lại nhé?',
              'question'
            );
          }
          else{
            swal({
              position: 'top',
              type: 'success',
              title: 'Đăng ký thành công!',
              showConfirmButton: false,
              timer: 1500
            }).then(
              data => {
                this.router.navigate(["/dangnhap"]);
              }
            );
          }
        },
        error => {
          console.log(error);
        }
      )
    }
    else{
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Thông tin nhập vào không hợp lệ, vui lòng kiểm tra lại!'
      })
    }
  }

}
