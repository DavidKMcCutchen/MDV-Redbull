import { TestBed } from '@angular/core/testing';

import { RedbullService } from './redbull.service';

describe('RedbullService', () => {
  let service: RedbullService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedbullService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
