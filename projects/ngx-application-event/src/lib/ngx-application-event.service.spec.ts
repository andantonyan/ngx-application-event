import { TestBed } from '@angular/core/testing';

import { NgxApplicationEventService } from './ngx-application-event.service';

describe('NgxApplicationEventService', () => {
  let service: NgxApplicationEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxApplicationEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
