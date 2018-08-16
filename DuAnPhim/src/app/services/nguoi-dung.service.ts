import { Injectable } from '@angular/core';
import { NguoiDung } from '../models/nguoi-dung';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {

  public DSNguoiDung: Array<NguoiDung>;

  private apiThemNguoiDung: string = `http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
  private apiCapNhatThongTn: string = `http://sv2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`;
  constructor(private http: Http) { }

  public LayDanhSachNguoiDung(): Observable<any>{
    const urlAPI = `http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02`;
    let obServe: Observable<any> = this.http.get(urlAPI).map((result: Response) => result.json());
    return obServe;
  }

  public LayDanhSachLoaiNguoiDung(): Observable<any>{
    const urlAPI = `http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`;

    let obServe: Observable<any> = this.http.get(urlAPI).map((result: Response) => result.json());

    return obServe;
  }

  public CapNhatThongTin(nguoidung: NguoiDung){
    const header: Headers = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');

    const options = new RequestOptions({ headers: header});
    const obServe: Observable<any> =
     this.http.post(this.apiCapNhatThongTn, nguoidung, options)
     .map((result: Response) => result.json());
     return obServe;
  }


  public TaoTaiKhoan (nguoidung: NguoiDung): Observable<any> {
    const header = new Headers();
    header.append('Content-Type', 'application/json; charset=UTF-8');
    console.log(nguoidung);
    const obServe = this.http.post(this.apiThemNguoiDung, nguoidung, {headers: header})
    .map((result: Response) => result.json());
    return obServe;
  }

  public ThemNguoiDung(nguoidung: NguoiDung){
    console.log(nguoidung);
    const header: Headers = new Headers();
    header.append('Content-Type','application/json;charset=UTF-8');
    const obServe: Observable<any> =
     this.http.post(this.apiThemNguoiDung, nguoidung, { headers: header})
     .map((result: Response) => result.json())
     return obServe;
  }

  public XoaNguoiDung(taiKhoan: string): Observable<any>{
    const urlAPI = `http://sv2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    // Gọi service đăng nhập
    let obServe: Observable<any> = this.http.delete(urlAPI).map((result: Response) => result.json());
    return obServe;
  }


  public DangKy(nguoiDung: NguoiDung): Observable<any>{
    const urlAPI = `http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    let header = new Headers();
    header.append('Content-Type','application/json;charset=UTF-8')
    let obServe = this.http.post(urlAPI, nguoiDung, {headers: header}).map((result: Response) => result.json());

    return obServe;
  }

  public DangNhap(taiKhoan: string, matKhau: string):Observable<any>{
    const urlAPI = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?TaiKhoan=${taiKhoan}&MatKhau=${matKhau}`;

    let header = new Headers();
    header.append('Content-Type','application/json;charset=UTF-8')
    // Gọi service đăng nhập
    let obServe = this.http.post(urlAPI, {headers: header}).map((result: Response) => result.json());

    return obServe;
  }

  public LayLichSuDatVe(taiKhoan: string):Observable<any>{
    const urlAPI = `http://sv2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${taiKhoan}`;

    let header = new Headers();
    header.append('Content-Type','application/json;charset=UTF-8')
    // Gọi service đăng nhập
    let obServe = this.http.post(urlAPI, {headers: header}).map((result: Response) => result.json());

    return obServe;
  }

  public CapNhatNguoiDung(nguoiDung: NguoiDung): Observable<any>{
    const urlAPI = `http://sv2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`;

    let header = new Headers();
    header.append('Content-Type','application/json;charset=UTF-8');
    // Gọi service đăng nhập
    let obServe = this.http.post(urlAPI, nguoiDung, {headers: header}).map((result: Response) => result.json());
    return obServe;
  }

}
