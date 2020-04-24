import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvNfeComponent } from './conv-nfe.component';

describe('ConvNfeComponent', () => {
  let component: ConvNfeComponent;
  let fixture: ComponentFixture<ConvNfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvNfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvNfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
