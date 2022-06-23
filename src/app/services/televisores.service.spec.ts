import { TestBed } from '@angular/core/testing';

import { TelevisoresService } from './televisores.service';

describe('TelevisoresService', () => {
  let service: TelevisoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelevisoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
