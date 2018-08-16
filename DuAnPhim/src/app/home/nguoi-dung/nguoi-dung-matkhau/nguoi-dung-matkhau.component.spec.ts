import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiDungMatkhauComponent } from './nguoi-dung-matkhau.component';

describe('NguoiDungMatkhauComponent', () => {
  let component: NguoiDungMatkhauComponent;
  let fixture: ComponentFixture<NguoiDungMatkhauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguoiDungMatkhauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiDungMatkhauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
