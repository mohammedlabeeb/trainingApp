import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcChildComponent } from './lc-child.component';

describe('LcChildComponent', () => {
  let component: LcChildComponent;
  let fixture: ComponentFixture<LcChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
