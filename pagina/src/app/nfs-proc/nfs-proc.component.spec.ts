import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfsProcComponent } from './nfs-proc.component';

describe('NfsProcComponent', () => {
  let component: NfsProcComponent;
  let fixture: ComponentFixture<NfsProcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfsProcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfsProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
