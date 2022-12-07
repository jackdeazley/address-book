import { TestBed } from '@angular/core/testing';

import { ToasterAlertService } from './toaster-alert.service';

describe('ToasterAlertService', () => {
  let service: ToasterAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToasterAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
