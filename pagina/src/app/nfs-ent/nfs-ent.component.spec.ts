import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfsEntComponent } from './nfs-ent.component';

describe('NfsEntComponent', () => {
  let component: NfsEntComponent;
  let fixture: ComponentFixture<NfsEntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfsEntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfsEntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
