import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdProcComponent } from './nd-proc.component';

describe('NdProcComponent', () => {
  let component: NdProcComponent;
  let fixture: ComponentFixture<NdProcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdProcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
