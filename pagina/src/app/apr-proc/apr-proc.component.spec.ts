import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprProcComponent } from './apr-proc.component';

describe('AprProcComponent', () => {
  let component: AprProcComponent;
  let fixture: ComponentFixture<AprProcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprProcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
