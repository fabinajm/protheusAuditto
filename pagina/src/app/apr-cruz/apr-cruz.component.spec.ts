import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprCruzComponent } from './apr-cruz.component';

describe('AprCruzComponent', () => {
  let component: AprCruzComponent;
  let fixture: ComponentFixture<AprCruzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprCruzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprCruzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
