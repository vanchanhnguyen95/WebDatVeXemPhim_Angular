import { Component, OnInit, Input } from '@angular/core';
import { NguoiDungService } from '../../../services/nguoi-dung.service';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-nguoi-dung-lichsu',
  templateUrl: './nguoi-dung-lichsu.component.html',
  styleUrls: ['./nguoi-dung-lichsu.component.css']
})
export class NguoiDungLichsuComponent implements OnInit {
  private subLichSu: Subscription;
  private lichSu: any;
  private userLogin: any; 

  constructor(private nguoiDungService: NguoiDungService) { }

  ngOnInit() {
    this.userLogin = JSON.parse(localStorage.getItem("UserLogin"));

    this.subLichSu = this.nguoiDungService.LayLichSuDatVe(this.userLogin.TaiKhoan).subscribe(
      result => {
        this.lichSu = result.DanhSachVeDaDat;
      }
    )
  }

}

