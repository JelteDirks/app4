import { TestBed } from '@angular/core/testing';

import { ContactpersonenService } from './contactpersonen.service';

describe('ContactpersonenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactpersonenService = TestBed.get(ContactpersonenService);
    expect(service).toBeTruthy();
  });
});
