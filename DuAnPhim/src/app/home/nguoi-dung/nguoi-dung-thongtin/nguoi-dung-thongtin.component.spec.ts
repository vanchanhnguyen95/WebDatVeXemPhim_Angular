import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiDungThongtinComponent } from './nguoi-dung-thongtin.component';

describe('NguoiDungThongtinComponent', () => {
  let component: NguoiDungThongtinComponent;
  let fixture: ComponentFixture<NguoiDungThongtinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguoiDungThongtinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiDungThongtinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
