import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfProtComponent } from './conf-prot.component';

describe('ConfProtComponent', () => {
  let component: ConfProtComponent;
  let fixture: ComponentFixture<ConfProtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfProtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfProtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
