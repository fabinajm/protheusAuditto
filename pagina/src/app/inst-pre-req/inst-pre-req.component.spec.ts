import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstPreReqComponent } from './inst-pre-req.component';

describe('InstPreReqComponent', () => {
  let component: InstPreReqComponent;
  let fixture: ComponentFixture<InstPreReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstPreReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstPreReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
