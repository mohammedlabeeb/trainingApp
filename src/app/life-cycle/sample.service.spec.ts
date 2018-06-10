import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { SampleService } from './sample.service';

fdescribe('SampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [SampleService, { provide: XHRBackend, useClass: MockBackend }]
    });
  });

  it('should be created', inject([SampleService], (service: SampleService) => {
    expect(service).toBeTruthy();
  }));

  it('should test http call ', inject([SampleService, XHRBackend], (service: SampleService, mockBackend: MockBackend) => {

    const mockResponse = {
      data: [
        { id: 0, name: 'Video 0' },
        { id: 1, name: 'Video 1' },
        { id: 2, name: 'Video 2' },
        { id: 3, name: 'Video 3' },
      ]
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    console.log(service.sampleHttp(), 'called');
    debugger;
    service.sampleHttp().subscribe(val => {
      console.log("sadsadsa", val);
      expect(val).toBeNull();
      expect(val).toBeTruthy();
      expect(val.length).toEqual(2);
    }, error => {
      console.log("Error", error);
    });
  }));
});
