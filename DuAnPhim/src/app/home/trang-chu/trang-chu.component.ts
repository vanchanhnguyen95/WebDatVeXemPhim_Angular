import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhimService } from '../../services/phim.service';
import { Phim } from '../../models/phim';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent implements OnInit, OnDestroy {
  private DanhSachPhim: Array<Phim>;
  private urlHost: String = `http://sv.myclass.vn/Images/Movies/`;
  private subService: Subscription;

  constructor(private servicePhim: PhimService) { }

  ngOnInit() {
    //subscribe lấy dữ liệu tại nhiều thời điểm khác nhau
    this.subService =
     this.servicePhim.LayDanhSachPhim()
     .subscribe((result: Array<Phim>) =>
      {this.DanhSachPhim = result;
      console.log(this.DanhSachPhim)})
  }

  ngOnDestroy() {
    this.subService.unsubscribe();
  }
  today: number = Date.now();

}
