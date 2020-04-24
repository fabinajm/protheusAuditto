import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfFinComponent } from './conf-fin.component';

describe('ConfFinComponent', () => {
  let component: ConfFinComponent;
  let fixture: ComponentFixture<ConfFinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfFinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
