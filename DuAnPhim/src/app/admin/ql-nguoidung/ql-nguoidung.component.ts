import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from '../../../../node_modules/rxjs';

import { NguoiDungService } from '../../services/nguoi-dung.service';
import { NguoiDung } from '../../models/nguoi-dung';
import { LoaiNguoiDung } from '../../models/loai-nguoi-dung';
import { DataTablesModule } from 'angular-datatables';

import swal from 'sweetalert2';

@Component({
  selector: 'app-ql-nguoidung',
  templateUrl: './ql-nguoidung.component.html',
  styleUrls: ['./ql-nguoidung.component.css']
})

export class QlNguoidungComponent implements OnInit, OnDestroy {

  private dsNguoiDung: NguoiDung[];
  private dsLoaiNguoiDung: LoaiNguoiDung[];
  private dtOptions: DataTables.Settings = {};
  private titleModal: string;
  private nguoiDung: NguoiDung = new NguoiDung();

  private subNguoiDung: Subscription;
  private subLoaiNguoiDung: Subscription;
  private themND: boolean = true;

  @ViewChild("formNguoiDung") formNguoiDung: any;

  constructor(private nguoiDungService: NguoiDungService) { }

  ngOnInit() {
    //Cài đặt hiển thị table
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        "search": "Tìm kiếm người dùng",
        "lengthMenu": "Hiển thị _MENU_ người",
        "info": " Tổng cộng: _TOTAL_ người",
        "infoFiltered": "( _MAX_ người)",
        "paginate": {
          "first": '<i class="fa fa-fast-backward" aria-hidden="true"></i>',
          "last": '<i class="fa fa-fast-forward" aria-hidden="true"></i>',
          "next": '<i class="fa fa-step-forward large" aria-hidden="true"></i>',
          "previous": '<i class="fa fa-step-backward" aria-hidden="true"></i>'
        }
      }
    };


    this.subNguoiDung = this.nguoiDungService.LayDanhSachNguoiDung().subscribe((result: NguoiDung[]) => { this.dsNguoiDung = result });
    this.subLoaiNguoiDung = this.nguoiDungService.LayDanhSachLoaiNguoiDung().subscribe((result: LoaiNguoiDung[]) => { this.dsLoaiNguoiDung = result });
  }

  ngOnDestroy() {
    this.subNguoiDung.unsubscribe();
    this.subLoaiNguoiDung.unsubscribe();
  }

  ThemNguoiDungModal() {
    this.titleModal = "Thêm người dùng";
    this.themND = true;
    this.nguoiDung = new NguoiDung();
    this.formNguoiDung.reset();
  }

  CapNhatNguoiDungModal(nd: NguoiDung) {
    this.titleModal = "Cập nhật thông tin";
    this.themND = false;
    this.nguoiDung = nd;
  }

  XoaNguoiDung(taiKhoan: string) {
    swal({
      title: 'Bạn chắc chắn muốn xóa?',
      text: "Dữ liệu đã xóa không thể phục hồi lại!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0c6218',
      cancelButtonColor: '#ecd509',
      cancelButtonText: 'Hủy',
      confirmButtonText: 'Xóa'
    }).then((result) => {
      if (result.value) {
        this.subNguoiDung = this.nguoiDungService.XoaNguoiDung(taiKhoan).subscribe(
          data => {
            console.log(data);
            swal(
              'Đã xóa!',
              'Xóa người dùng thành công!',
              'success'
            ).then(
              result => {
                location.reload();
              }
            );
          },
          error => {
            console.log(error);
          }
        )
      }
    })
  }

  LuuNguoiDung(formNguoiDung: NguoiDung) {
    // Thêm người dùng
    if (this.themND) {
      formNguoiDung.MaNhom = "GP02";
      this.subNguoiDung = this.nguoiDungService.DangKy(formNguoiDung).subscribe(
        data => {
          console.log(data);
          swal(
            'Chúc mừng!',
            'Người dùng đã được thêm!',
            'success'
          ).then(
            result => {
              location.reload();
            }
          );
        },
        error => {
          console.log(error);
        }
      )
    }
    
    else {
      this.subNguoiDung = this.nguoiDungService.CapNhatNguoiDung(this.nguoiDung).subscribe(
        data => {
          console.log(data);
          swal(
            'Chúc mừng!',
            'Người dùng đã được cập nhật!',
            'success'
          ).then(
            result => {
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

