import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfAudtComponent } from './conf-audt.component';

describe('ConfAudtComponent', () => {
  let component: ConfAudtComponent;
  let fixture: ComponentFixture<ConfAudtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfAudtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfAudtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
