import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthGuardService } from '../../services/user-auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { NguoiDungLayoutComponent } from './nguoi-dung-layout/nguoi-dung-layout.component';
import { NguoiDungThongtinComponent } from './nguoi-dung-thongtin/nguoi-dung-thongtin.component';
import { NguoiDungLichsuComponent } from './nguoi-dung-lichsu/nguoi-dung-lichsu.component';
import { NguoiDungMatkhauComponent } from './nguoi-dung-matkhau/nguoi-dung-matkhau.component';

const nguoidungRoute: Routes = [
  {path: '', component: NguoiDungLayoutComponent, children: [
    {path: '', component: NguoiDungThongtinComponent},
    {path: 'thongtin', component: NguoiDungThongtinComponent},
    {path: 'lichsu', component: NguoiDungLichsuComponent},
    {path: 'matkhau', component: NguoiDungMatkhauComponent}
  ], canActivate: [UserAuthGuardService]}
]

@NgModule({
  imports: [
    CommonModule,FormsModule,NgxPaginationModule,RouterModule.forChild(nguoidungRoute)
  ],
  exports: [NguoiDungLayoutComponent,NguoiDungThongtinComponent,NguoiDungLichsuComponent, NguoiDungMatkhauComponent],
  declarations: [NguoiDungLayoutComponent, NguoiDungThongtinComponent, NguoiDungLichsuComponent, NguoiDungMatkhauComponent]
})
export class NguoiDungModule { }
