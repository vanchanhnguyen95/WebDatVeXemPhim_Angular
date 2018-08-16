import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.css']
})
export class SanPhamComponent implements OnInit {

  @Input() sanpham;
  @Output() themGioHang = new EventEmitter();
  @Output() botGioHang = new EventEmitter();
  ThemSanPham(sanPham:any)
  {
    this.themGioHang.emit(this.sanpham)

  }
  BotSanPham(sanPham:any)
  {
    this.botGioHang.emit(this.sanpham)
  }
  constructor() { }

  ngOnInit() {
  }

}