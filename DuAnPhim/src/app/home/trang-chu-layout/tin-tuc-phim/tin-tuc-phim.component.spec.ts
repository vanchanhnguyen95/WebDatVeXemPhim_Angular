import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinTucPhimComponent } from './tin-tuc-phim.component';

describe('TinTucPhimComponent', () => {
  let component: TinTucPhimComponent;
  let fixture: ComponentFixture<TinTucPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinTucPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinTucPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
