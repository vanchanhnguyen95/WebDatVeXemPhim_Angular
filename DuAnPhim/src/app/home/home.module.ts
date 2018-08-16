import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {RouterModule, Routes} from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TrangChuLayoutComponent } from './trang-chu-layout/trang-chu-layout.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { DatVeComponent } from './dat-ve/dat-ve.component';
// import { HeaderComponent } from './trang-chu-layout/header/header.component';
import { FooterComponent } from './trang-chu-layout/footer/footer.component';
import {MyDatePickerModule} from 'mydatepicker';
import { AuthGuardService } from '../services/auth-guard.service';
import { BannerComponent } from './trang-chu-layout/banner/banner.component';
import { GioiThieuPhimComponent } from './trang-chu-layout/gioi-thieu-phim/gioi-thieu-phim.component';
import { TinTucPhimComponent } from './trang-chu-layout/tin-tuc-phim/tin-tuc-phim.component';
// import { DangChieuComponent } from './dang-chieu/dang-chieu.component';
import { TopPhimComponent } from './top-phim/top-phim.component';
import { PhimPhoBienComponent } from './phim-pho-bien/phim-pho-bien.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { GheComponent } from './dat-ve/ghe/ghe.component';
import { SanPhamComponent } from './san-pham/san-pham.component';
// import { NguoidungNavbarComponent } from './trang-chu-layout/nguoidung-navbar/nguoidung-navbar.component';
import { TrangchuHeaderComponent } from './trang-chu-layout/trangchu-header/trangchu-header.component';
import { NguoiDungModule } from './nguoi-dung/nguoi-dung.module';


const homeRoute: Routes = [
  {
    path: '', component:TrangChuLayoutComponent, children:[
    {path: '', component:TrangChuComponent},
    {path: 'trangchu', component:TrangChuComponent},
    // {path: 'chitietphim', component:ChiTietPhimComponent},
    // {path: 'datve', component:DatVeComponent},
    {path: 'banner', component:BannerComponent},
    {path: 'phobien', component: PhimPhoBienComponent}
    ]},
    {path: 'chitietphim', component:ChiTietPhimComponent},
    {path: 'dangnhap', component: DangNhapComponent, canActivate: [AuthGuardService]},
    {path: 'dangky', component: DangKyComponent, canActivate: [AuthGuardService]},
    {path: 'datve', component: DatVeComponent},
    {path: 'nguoidung', loadChildren: () => NguoiDungModule}

]

@NgModule({
  imports: [
    CommonModule, FormsModule ,RouterModule.forChild(homeRoute),NgxPaginationModule, MyDatePickerModule
  ],
  declarations: [TrangChuComponent, TrangChuLayoutComponent, ChiTietPhimComponent, DatVeComponent, FooterComponent, BannerComponent, GioiThieuPhimComponent, TinTucPhimComponent, TopPhimComponent, PhimPhoBienComponent, DangNhapComponent, DangKyComponent, GheComponent, SanPhamComponent, TrangchuHeaderComponent]
})
export class HomeModule { }
