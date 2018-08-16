import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlPhimComponent } from './ql-phim.component';

describe('QlPhimComponent', () => {
  let component: QlPhimComponent;
  let fixture: ComponentFixture<QlPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
