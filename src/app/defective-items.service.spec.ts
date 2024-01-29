import { TestBed } from '@angular/core/testing';

import { DefectiveItemsService } from './defective-items.service';

describe('DefectiveItemsService', () => {
  let service: DefectiveItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefectiveItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
