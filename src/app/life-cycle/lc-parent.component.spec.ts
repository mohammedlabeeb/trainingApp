import { SampleService } from './sample.service';
import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';

import { LcParentComponent } from './lc-parent.component';
import { LcChildComponent } from './lc-child.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LcParentComponent', () => {
  let component: LcParentComponent;
  let fixture: ComponentFixture<LcParentComponent>;
  let nativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [LcParentComponent, LcChildComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcParentComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change first param', () => {
    component.changeParam1();
    fixture.detectChanges();
    expect(component.param1).toEqual('I am Changed');
  });

  it('should change second param', () => {
    nativeElement.querySelector('#button2').click();
    fixture.detectChanges();
    expect(component.param2.phone).toEqual('9857585555');
  });

  it('should change second param', () => {
    expect(component.showContent).toBeFalsy();
    component.toggleContent();
    fixture.detectChanges();
    expect(component.showContent).toBeTruthy();
    expect(nativeElement.querySelector('#content').textContent.trim()).toEqual('I am inside Child');
  });

  it('should test async function', fakeAsync(() => {
    expect(component.sampleVal).toEqual('before timout');
    component.sampleAsycFunction();
    tick(3000);
    fixture.detectChanges();
    expect(component.sampleVal).toEqual('after timeout');
  }));

  it('sample for spy service method', inject([SampleService], (sampleService: SampleService) => {
    spyOn(sampleService, 'somethingHere').and.callThrough();
    component.clickMe();
    expect(sampleService.somethingHere).toHaveBeenCalled();
    expect(component.sampleVal).toEqual('something reurns');
  }));

  it('sample for spy service method - mock', inject([SampleService], (sampleService: SampleService) => {
    // spyOn(sampleService, 'somethingHere').and.returnValue('New Value');
    spyOn(sampleService, 'somethingHere').and.callFake(() => 'New Value');
    component.clickMe();
    expect(sampleService.somethingHere).toHaveBeenCalled();
    expect(component.sampleVal).toEqual('New Value');
  }));


});
