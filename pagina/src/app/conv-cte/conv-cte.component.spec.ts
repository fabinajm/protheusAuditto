import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvCteComponent } from './conv-cte.component';

describe('ConvCteComponent', () => {
  let component: ConvCteComponent;
  let fixture: ComponentFixture<ConvCteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvCteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvCteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
