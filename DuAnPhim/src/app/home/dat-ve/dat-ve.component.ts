import { Component, OnInit, OnDestroy, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from '../../services/phim.service';
import swal from 'sweetalert';
import { GheComponent } from 'src/app/home/dat-ve/ghe/ghe.component';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-dat-ve',
  templateUrl: './dat-ve.component.html',
  styleUrls: ['./dat-ve.component.css']
})
export class DatVeComponent implements OnInit, OnDestroy {

  private MaLichChieu: number;
  private subParams: Subscription;
  private subParamPhim: Subscription;
  private subParamDatVe: Subscription;
  private DanhSachGhe = [];
  public tongTien = 0;
  private taiKhoan: string;
  private DanhSachGheDaDat: Array<any> = new Array<any>();
  public gioHang: Array<any> = [];
  public tienVe = 0;

  public DanhSachSanPham: Array<any> = [
    {
      "MaSP": 2,
      "TenSP": "Bắp rang",
      "DonGia": 15000,
      "HinhAnh": "../../../assets/img/baprang.jpg",
      "SoLuongTon": 17
    },
    {
      "MaSP": 3,
      "TenSP": "Coca cola",
      "DonGia": 20000,
      "HinhAnh": "../../../assets/img/coca.jpg",
      "SoLuongTon": 14
    }
  ];


  constructor(private activeRoute: ActivatedRoute,
    private phimService: PhimService, private router: Router
  ) { }

  ngOnInit() {
    this.subParams = this.activeRoute.queryParams.subscribe(
      thamso => {
        this.MaLichChieu = thamso.MaLichChieu,
          console.log(thamso);
      });
    this.subParamPhim = this.phimService.LayChiTietPhongVe(this.MaLichChieu).subscribe((phongVe: any) => {
      this.DanhSachGhe = phongVe.DanhSachGhe;
      console.log(phongVe);
      this.MaLichChieu = phongVe.MaLichChieu;
    });

  }

  
  tinhtong() {
    let tienve = 0;
    for (let ghe of this.DanhSachGheDaDat) {
      tienve += ghe.GiaVe;
    }
    this.tienVe = tienve;
    return this.tienVe;
  }


  DatGhe(gheDangDat: any) {

    let tongTien = 0;
    for (let index in this.DanhSachGheDaDat) {
      //Kiểm tra ghế vừa đặt có trong danh sách ghế chưa
      if (gheDangDat.DangDat == false) {
        if (gheDangDat.MaGhe === this.DanhSachGheDaDat[index].MaGhe) {
          this.DanhSachGheDaDat.splice(Number(index), 1);
        }
      }
    }
    if (gheDangDat.DangDat === true) {
      let ghe = { MaGhe: gheDangDat.MaGhe, GiaVe: gheDangDat.GiaVe };
      this.DanhSachGheDaDat.push(ghe);
    }
    console.log(this.DanhSachGheDaDat);

  }

  @ViewChildren(GheComponent) dsAppGhe: QueryList<GheComponent>;
  HuyGhe(soGhe: number) {
    for (let index in this.DanhSachGheDaDat) {
      //Kiểm tra
      if (soGhe === this.DanhSachGheDaDat[index].SoGhe) {
        this.DanhSachGheDaDat.splice(Number(index), 1);
      }
    }
    this.dsAppGhe.forEach(gheCom => {
      if (soGhe === gheCom.ghe.SoGhe) {
        gheCom.dangDat = false;
      }
    })
  }



  DatVe() {
    let user = JSON.parse(localStorage.getItem("UserLogin"));
    let ve: any = {

      MaLichChieu: this.MaLichChieu,
      //localStorage.getItem("TaiKhoan") => Parse ra lấy TaiKhoan gán vào thuộc tính này
      TaiKhoanNguoiDung: user.TaiKhoan,
      DanhSachVe: this.DanhSachGheDaDat
    }
    this.subParams = this.phimService.DatVe(ve).subscribe((ketqua: any) => {
      console.log(ketqua);
      this.router.navigate(["/trangchu"]);
    });
    swal("Chúc mừng!", "Đặt ghế thành công!", "success");

  }
  reset() {
    // localStorage.clear();
    // location.reload();
  }

  public tongSoLuong = 0;


  CapNhatGioHang() {
    if (localStorage.getItem("GioHang")) {
      this.gioHang = JSON.parse(localStorage.getItem("GioHang"));
      let tongSoLuong = 0;
      let tongTien = 0;
      for (let sp of this.gioHang) {
        tongSoLuong += sp.SoLuong;
        tongTien += sp.SoLuong * sp.DonGia;
      }
      this.tongSoLuong = tongSoLuong;
      this.tongTien = tongTien;
    }
  }


  ThemGioHang(sanpham: any) {

    if (localStorage.getItem('GioHang')) {
      this.gioHang = JSON.parse(localStorage.getItem('GioHang'));
    }
    let flag: boolean = false;
    for (let index in this.gioHang) {
      //Kiểm tra xem sản phẩm vừa thêm vào có trùng mã với sản phẩm
      //Trong mảng danh sách sản phẩm hay ko
      let spDSSPDC = this.gioHang[index];
      if (sanpham.MaSP == spDSSPDC.MaSP) {
        spDSSPDC.SoLuong += 1;
        flag = true;
      }
    }
    if (flag === false) {
      let spGioHang = {
        MaSP: sanpham.MaSP,
        TenSP: sanpham.TenSP,
        DonGia: sanpham.DonGia,
        HinhAnh: sanpham.HinhAnh,
        SoLuong: 1
      }
      this.gioHang.push(spGioHang);
    }
    localStorage.setItem("GioHang", JSON.stringify(this.gioHang));
    this.CapNhatGioHang();
  }

  BotGioHang(sanpham: any) {
    if (localStorage.getItem('GioHang')) {
      this.gioHang = JSON.parse(localStorage.getItem('GioHang'));
    }
    let flag: boolean = false;
    for (let index in this.gioHang) {
      //Kiểm tra xem sản phẩm vừa thêm vào có trùng mã với sản phẩm
      //Trong mảng danh sách sản phẩm hay ko
      let spDSSPDC = this.gioHang[index];
      if (sanpham.MaSP == spDSSPDC.MaSP) {
        spDSSPDC.SoLuong -= 1;
        flag = true;
      }
    }
    if (flag === false) {
      let spGioHang = {
        MaSP: sanpham.MaSP,
        TenSP: sanpham.TenSP,
        DonGia: sanpham.DonGia,
        HinhAnh: sanpham.HinhAnh,
        SoLuong: 1
      }
      this.gioHang.push(spGioHang);
    }
    localStorage.setItem("GioHang", JSON.stringify(this.gioHang));
    this.CapNhatGioHang();
  }



  ngOnDestroy() {
    // this.subParams.unsubscribe();
    // this.subParamDatVe.unsubscribe();
    // this.subParamPhim.unsubscribe();
  }
}