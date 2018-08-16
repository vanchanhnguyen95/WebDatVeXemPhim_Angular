import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapNhatPhimComponent } from './cap-nhat-phim.component';

describe('CapNhatPhimComponent', () => {
  let component: CapNhatPhimComponent;
  let fixture: ComponentFixture<CapNhatPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapNhatPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapNhatPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
