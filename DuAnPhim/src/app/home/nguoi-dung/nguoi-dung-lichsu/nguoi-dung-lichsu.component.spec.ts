import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiDungLichsuComponent } from './nguoi-dung-lichsu.component';

describe('NguoiDungLichsuComponent', () => {
  let component: NguoiDungLichsuComponent;
  let fixture: ComponentFixture<NguoiDungLichsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguoiDungLichsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiDungLichsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
