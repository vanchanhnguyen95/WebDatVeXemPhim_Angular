import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemPhimComponent } from './them-phim.component';

describe('ThemPhimComponent', () => {
  let component: ThemPhimComponent;
  let fixture: ComponentFixture<ThemPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
