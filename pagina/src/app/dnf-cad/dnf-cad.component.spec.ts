import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnfCadComponent } from './dnf-cad.component';

describe('DnfCadComponent', () => {
  let component: DnfCadComponent;
  let fixture: ComponentFixture<DnfCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnfCadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnfCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
