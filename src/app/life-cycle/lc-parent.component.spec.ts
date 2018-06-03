import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcParentComponent } from './lc-parent.component';

describe('LcParentComponent', () => {
  let component: LcParentComponent;
  let fixture: ComponentFixture<LcParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
