import { Injectable } from '@angular/core';
import {Phim} from '../models/phim';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PhimService {
  public DSPhim: Array<Phim>;
  //api Lấy Danh sách phim
  // private apiLayDSPhim: string = `http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP02`;
  //api Thêm Phim mới
  private apiThemPhim: string = `http://sv2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`;
  //api UploadFile
  private apiUploadFile: string = `http://sv2.myclass.vn/api/QuanLyPhim/UploadFile`;
  //api Cập nhật phim
  private apiCapNhatPhim: string = `http://sv2.myclass.vn/api/QuanLyPhim/CapNhatPhim`;
  //api Xóa phim
  //private apiXoaPhim: string = `http://sv2.myclass.vn/QuanLyPhim/XoaPhim?MaPhim`;
  constructor(private http: Http) { }

  public LayDanhSachPhim(): Observable <any[]> {
    const apiLayDanhSachPhim = 
    `http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP02`;
    let obServe:Observable<any[]> =
    this.http.get(apiLayDanhSachPhim).map((result:Response)=>result.json());
    return obServe;
  }

  public LayChiTietPhim(id: any): Observable <any>{
    const apiLayChiTietPhim = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${id}`;
    const obServe: Observable<any> =
     this.http.get(apiLayChiTietPhim)
     .map((result: Response) => result.json());
    return obServe;
  }

  public CapNhatPhim(phim: Phim){
    const header: Headers = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: header});
    const obServe: Observable<any> =
     this.http.post(this.apiCapNhatPhim, phim, options)
     .map((result: Response) => result.json());
     return obServe;
  }

  public UploadFile(Files: any){
    const header: Headers = new Headers();
    const options = new RequestOptions({ headers: header});
    const obServe: Observable<any> =
     this.http.post(this.apiUploadFile, Files, options)
     .map((result: Response) => result.json());
    return obServe;
  }
  

  public ThemPhim(phim: Phim){
    console.log(phim);
    const header: Headers = new Headers();
    header.append('Content-Type', 'application/json');
    const obServe: Observable<any> =
    this.http.post(this.apiThemPhim, phim, { headers: header})
    .map((result: Response) => result.json())
    return obServe;
  }

  public XoaPhim(id: any){
    const apiXoaPhim = `http://sv2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${id}`;
    const obServe: Observable<any> =
     this.http.delete(apiXoaPhim)
     .map((result: Response) => result.json());
    return obServe;
  }


  public LayChiTietPhongVe(MaLichChieu:any):Observable<any[]>
  {
    const apiLayChiTietPhongVe =
    `http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${MaLichChieu}`;
    let obServe:Observable<any[]> =
    this.http.get(apiLayChiTietPhongVe).map((result:Response)=>result.json());
    return obServe;
  }
  public DatVe(lstVe:any):Observable<any>
  {
    const apiDatVe = `http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`;
    let header = new Headers();
    header.append('Content-Type','application/json;charset=UTF-8');
    console.log(lstVe);
    let obServe:Observable<any[]> =
     this.http.post(apiDatVe,lstVe,{headers:header})
    .map((result:Response)=>result.json());
    return obServe;
  }


  public LayLichSuDatVe(lstVe: any): Observable<any>
  {
    const apiLayLichSuDatVe = `http://sv2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=nguyenvana`;
    let header = new Headers();
    header.append('Content-Type','application/json;charset=UTF-8');
    console.log(lstVe);
    let obServe: Observable<any[]> =
     this.http.post(apiLayLichSuDatVe, lstVe, {headers:header})
     .map((result: Response) => result.json());
     return obServe;
  }

}
