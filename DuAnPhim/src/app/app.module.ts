import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import swal from 'sweetalert';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {AdminModule} from './admin/admin.module';
import {HomeModule} from './home/home.module';

const appRoute:Routes = [
  {path: '', loadChildren: () => HomeModule},
  {path: 'trangchu', loadChildren: () =>HomeModule},
  {path: 'admin', loadChildren: () => AdminModule}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoute), HttpModule, DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
