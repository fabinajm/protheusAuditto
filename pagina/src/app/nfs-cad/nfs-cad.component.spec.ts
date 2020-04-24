import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfsCadComponent } from './nfs-cad.component';

describe('NfsCadComponent', () => {
  let component: NfsCadComponent;
  let fixture: ComponentFixture<NfsCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfsCadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfsCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
