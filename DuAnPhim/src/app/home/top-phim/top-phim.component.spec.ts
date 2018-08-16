import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPhimComponent } from './top-phim.component';

describe('TopPhimComponent', () => {
  let component: TopPhimComponent;
  let fixture: ComponentFixture<TopPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
