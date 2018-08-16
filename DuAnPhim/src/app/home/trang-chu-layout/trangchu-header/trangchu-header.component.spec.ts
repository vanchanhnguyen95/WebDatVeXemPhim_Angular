import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangchuHeaderComponent } from './trangchu-header.component';

describe('TrangchuHeaderComponent', () => {
  let component: TrangchuHeaderComponent;
  let fixture: ComponentFixture<TrangchuHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangchuHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangchuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
