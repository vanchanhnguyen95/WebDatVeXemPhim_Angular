import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhimService } from '../../services/phim.service';
import { Phim } from '../../models/phim';
import { Subscription } from 'rxjs';
import swal from 'sweetalert';

@Component({
  selector: 'app-ql-phim',
  templateUrl: './ql-phim.component.html',
  styleUrls: ['./ql-phim.component.css']
})
export class QlPhimComponent implements OnInit, OnDestroy {

  private DanhSachPhim: Array<Phim>;
  private urlHost: String = `http://sv2.myclass.vn/Images/`
  private subService: Subscription;

  constructor(private servicePhim: PhimService) { }

  ngOnInit() {
    //subscribe lấy dữ liệu tại nhiều thời điểm khác nhau
    this.subService =
     this.servicePhim.LayDanhSachPhim()
     .subscribe((result: Array<Phim>) =>
      {this.DanhSachPhim = result;})
  }

  XoaPhim(id){
    this.servicePhim.XoaPhim(id).subscribe((result) => {
      console.log(result);
      const index = this.DanhSachPhim.findIndex( phim => phim.MaPhim === id);
      this.DanhSachPhim.splice(index, 1);
    });
    swal("Chúc mừng!", "Thêm thành công!", "success");
  }

  ngOnDestroy(){
    this.subService.unsubscribe();
  }
}
