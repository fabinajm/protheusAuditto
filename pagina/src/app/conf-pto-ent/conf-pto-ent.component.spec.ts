import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfPtoEntComponent } from './conf-pto-ent.component';

describe('ConfPtoEntComponent', () => {
  let component: ConfPtoEntComponent;
  let fixture: ComponentFixture<ConfPtoEntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfPtoEntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfPtoEntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
