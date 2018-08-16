import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangChuLayoutComponent } from './trang-chu-layout.component';

describe('TrangChuLayoutComponent', () => {
  let component: TrangChuLayoutComponent;
  let fixture: ComponentFixture<TrangChuLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangChuLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangChuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
