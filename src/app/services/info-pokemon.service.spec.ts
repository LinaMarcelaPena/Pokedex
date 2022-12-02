import { TestBed } from '@angular/core/testing';

import { InfoPokemonService } from './info-pokemon.service';

describe('InfoPokemonService', () => {
  let service: InfoPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
