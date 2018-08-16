import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataTablesModule } from 'angular-datatables';
import { Routes, RouterModule} from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { QlPhimComponent } from './ql-phim/ql-phim.component';
import { HeaderAdminComponent } from './admin-layout/header-admin/header-admin.component';
import { LeftMenuComponent } from './admin-layout/left-menu/left-menu.component';
import { CapNhatPhimComponent } from './ql-phim/cap-nhat-phim/cap-nhat-phim.component';
import { MyDatePickerModule } from 'mydatepicker';
import { ThemPhimComponent } from './ql-phim/them-phim/them-phim.component';
import { QlNguoidungComponent } from './ql-nguoidung/ql-nguoidung.component';
import { AdminAuthGuardService } from '../services/admin-auth-guard.service';

const adminRoute:Routes = [
  {path: '', component: AdminLayoutComponent, children:[
    {path: '',component: AdminIndexComponent},
    {path: 'index', component: AdminIndexComponent},
    {path: 'qlphim', component: QlPhimComponent},
    {path: 'qlnguoidung', component: QlNguoidungComponent},
    {path: 'capnhatphim', component: CapNhatPhimComponent},
    {path: 'themphim', component: ThemPhimComponent}
  ], canActivate: [AdminAuthGuardService]},
]

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(adminRoute),MyDatePickerModule,NgxPaginationModule, DataTablesModule
  ],
  declarations: [AdminLayoutComponent, AdminIndexComponent, QlPhimComponent, HeaderAdminComponent, LeftMenuComponent, CapNhatPhimComponent, ThemPhimComponent, QlNguoidungComponent]
})
export class AdminModule { }
