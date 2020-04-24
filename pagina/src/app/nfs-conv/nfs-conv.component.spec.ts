import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfsConvComponent } from './nfs-conv.component';

describe('NfsConvComponent', () => {
  let component: NfsConvComponent;
  let fixture: ComponentFixture<NfsConvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfsConvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfsConvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
