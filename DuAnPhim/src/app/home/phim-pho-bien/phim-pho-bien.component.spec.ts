import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhimPhoBienComponent } from './phim-pho-bien.component';

describe('PhimPhoBienComponent', () => {
  let component: PhimPhoBienComponent;
  let fixture: ComponentFixture<PhimPhoBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhimPhoBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhimPhoBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
