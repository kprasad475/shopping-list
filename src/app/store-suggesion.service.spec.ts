import { TestBed } from '@angular/core/testing';

import { StoreSuggesionService } from './store-suggesion.service';

describe('StoreSuggesionService', () => {
  let service: StoreSuggesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreSuggesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
