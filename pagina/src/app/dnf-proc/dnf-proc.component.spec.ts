import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnfProcComponent } from './dnf-proc.component';

describe('DnfProcComponent', () => {
  let component: DnfProcComponent;
  let fixture: ComponentFixture<DnfProcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnfProcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnfProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
