import { TestBed } from '@angular/core/testing';

import { VeggiesHubService } from './veggies-hub.service';

describe('VeggiesHubService', () => {
  let service: VeggiesHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeggiesHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
