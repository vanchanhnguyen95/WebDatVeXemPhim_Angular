import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {

  @Input() ghe:any;
  public dangDat:boolean = false;
  @Output() eventDatGhe = new EventEmitter();
  DatGhe(dangDat:boolean,gheDuocDat:any)
  {
    if(dangDat)
    {
      this.dangDat = false;
    }else{
      this.dangDat=true
    }
    let ghe = {MaGhe:gheDuocDat.MaGhe,GiaVe:gheDuocDat.GiaVe,DangDat:this.dangDat};
    this.eventDatGhe.emit(ghe);
  }

  constructor() { }

  ngOnInit() {
  }

}

