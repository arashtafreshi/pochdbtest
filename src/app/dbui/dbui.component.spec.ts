import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbuiComponent } from './dbui.component';

describe('DbuiComponent', () => {
  let component: DbuiComponent;
  let fixture: ComponentFixture<DbuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
