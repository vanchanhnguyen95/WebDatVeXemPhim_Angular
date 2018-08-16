import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiDungLayoutComponent } from './nguoi-dung-layout.component';

describe('NguoiDungLayoutComponent', () => {
  let component: NguoiDungLayoutComponent;
  let fixture: ComponentFixture<NguoiDungLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguoiDungLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiDungLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
