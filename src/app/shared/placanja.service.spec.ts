import { TestBed } from '@angular/core/testing';

import { PlacanjaService } from './placanja.service';

describe('PlacanjaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlacanjaService = TestBed.get(PlacanjaService);
    expect(service).toBeTruthy();
  });
});
