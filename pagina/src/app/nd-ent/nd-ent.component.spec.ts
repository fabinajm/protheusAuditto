import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdEntComponent } from './nd-ent.component';

describe('NdEntComponent', () => {
  let component: NdEntComponent;
  let fixture: ComponentFixture<NdEntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdEntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdEntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
