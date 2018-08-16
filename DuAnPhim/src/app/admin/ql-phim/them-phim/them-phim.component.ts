import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Phim } from '../../../models/phim';
import { PhimService } from '../../../services/phim.service';
import { Subscription } from 'rxjs';
import swal from 'sweetalert';

@Component({
  selector: 'app-them-phim',
  templateUrl: './them-phim.component.html',
  styleUrls: ['./them-phim.component.css']
})
export class ThemPhimComponent implements OnInit, OnDestroy {

  private phim: Phim;
  private subServicePhim: Subscription;
  constructor( private servicePhim: PhimService) { }

  ngOnInit() {
  }

  ThemPhim(phim, files){
    const file = files[0];
    console.log(file);
    const formData: FormData = new FormData();
    formData.append('Files', file);
    formData.append('TenPhim', phim.TenPhim);
    phim.ID = parseFloat(phim.ID);
    console.log(phim.ReleaseDate);
    phim.NgayKhoiChieu = phim.ReleaseDate.formatted;
    phim.HinhAnh = file.name;
    phim.MaNhom = 'GP02';
    console.log(this.phim);
    this.servicePhim.UploadFile(formData)
    .subscribe((res) => {console.log(res);});
    this.subServicePhim = this.servicePhim.ThemPhim(phim)
    .subscribe((result) => {console.log(result);});
    swal("Chúc mừng!", "Thêm thành công!", "success");
  }

  ngOnDestroy(){
    // this.subServicePhim.unsubscribe();
  }

}
