import { Component, OnInit, ViewChild } from '@angular/core';
import { NguoiDung } from '../../../models/nguoi-dung';
import { NguoiDungService } from '../../../services/nguoi-dung.service';
import { Subscription } from '../../../../../node_modules/rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-nguoi-dung-thongtin',
  templateUrl: './nguoi-dung-thongtin.component.html',
  styleUrls: ['./nguoi-dung-thongtin.component.css']
})
export class NguoiDungThongtinComponent implements OnInit {


  @ViewChild("formNguoiDung") formNguoiDung: any;

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

  LuuNguoiDung() {
    if (this.formNguoiDung.form.valid) {
      this.subNguoiDung = this.nguoiDungService.CapNhatNguoiDung(this.nguoiDung).subscribe(
        result => {
          // console.log(result);

          swal(
            'Cập nhật thành công!',
            'Thông tin đã được cập nhật!',
            'success'
          ).then(
            data => {
              // Luu lai nguoi dung vao local store
              this.userLogin.TaiKhoan = this.nguoiDung.TaiKhoan;
              this.userLogin.HoTen = this.nguoiDung.HoTen;
              this.userLogin.MatKhau = this.nguoiDung.MatKhau;
              this.userLogin.Email = this.nguoiDung.Email;
              this.userLogin.SoDT = this.nguoiDung.SoDT;
              this.userLogin.MaNhom = 'GP02';
              this.userLogin.MaLoaiNguoiDung = this.nguoiDung.MaLoaiNguoiDung;

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

}




