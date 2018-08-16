import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GioiThieuPhimComponent } from './gioi-thieu-phim.component';

describe('GioiThieuPhimComponent', () => {
  let component: GioiThieuPhimComponent;
  let fixture: ComponentFixture<GioiThieuPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GioiThieuPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GioiThieuPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
