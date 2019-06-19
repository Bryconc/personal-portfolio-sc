import { TestBed } from '@angular/core/testing';

import { CrossOriginHttpClientService } from './cross-origin-http-client.service';

describe('CrossOriginHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrossOriginHttpClientService = TestBed.get(CrossOriginHttpClientService);
    expect(service).toBeTruthy();
  });
});
