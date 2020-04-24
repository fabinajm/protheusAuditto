import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnfEntComponent } from './dnf-ent.component';

describe('DnfEntComponent', () => {
  let component: DnfEntComponent;
  let fixture: ComponentFixture<DnfEntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnfEntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnfEntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
