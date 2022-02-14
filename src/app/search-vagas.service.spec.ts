import { TestBed } from '@angular/core/testing';

import { SearchVagasService } from './search-vagas.service';

describe('SearchVagasService', () => {
  let service: SearchVagasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchVagasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
