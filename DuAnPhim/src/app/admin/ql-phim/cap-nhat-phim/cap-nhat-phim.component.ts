import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Phim } from '../../../models/phim';
import { PhimService } from '../../../services/phim.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import {IMyOptions, IMyDate, IMyDateModel} from 'mydatepicker';
import swal from 'sweetalert';


@Component({
  selector: 'app-cap-nhat-phim',
  templateUrl: './cap-nhat-phim.component.html',
  styleUrls: ['./cap-nhat-phim.component.css']
})
export class CapNhatPhimComponent implements OnInit, OnDestroy {

  private id: number;
  private subParams: Subscription;
  private groupID: string;
  private phim: Phim;
  private load: Boolean = false;
  private iframe;
  private subServicePhim: Subscription;
  private subService: Subscription;
  constructor(private activeRoute: ActivatedRoute, private servicePhim: PhimService, private sanitizer: DomSanitizer) { }

  //Lấy chi tiết phim
  ngOnInit() {
    this.subParams = this.activeRoute.queryParams
    .subscribe(thamso => 
      {this.id = thamso.id;
      this.groupID = thamso.groupID;
    this.subService = this.servicePhim.LayChiTietPhim(this.id)
    .subscribe((result: Phim) => {console.log(result);
    this.phim = result;
    this.load = true;
    });
  })

  }

  //Cập nhật phim
  CapNhatPhim(phim, files){
    const file = files[0];
    const formData: FormData = new FormData();

    phim.MaPhim = this.phim.MaPhim;
    console.log(phim.NgayKhoiChieu);
    phim.HinhAnh = this.phim.HinhAnh;
    phim.MaNhom = this.phim.MaNhom;
    console.log(phim.MaNhom);
    this.phim = phim;
    this.phim.NgayKhoiChieu = phim.NgayKhoiChieu.formatted;
    this.phim.DanhGia = parseFloat(phim.DanhGia);
    console.log(this.phim);
    this.subServicePhim =
     this.servicePhim.CapNhatPhim(this.phim)
     .subscribe((result) => {console.log(result);});
     swal("Chúc mừng!", "Thêm thành công!", "success");
  }

  ngOnDestroy(): void{
    this.subParams.unsubscribe();
    this.subService.unsubscribe();
  }



}
