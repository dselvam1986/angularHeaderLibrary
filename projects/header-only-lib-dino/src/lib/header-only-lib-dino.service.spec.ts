import { TestBed } from '@angular/core/testing';

import { HeaderOnlyLibDinoService } from './header-only-lib-dino.service';

describe('HeaderOnlyLibDinoService', () => {
  let service: HeaderOnlyLibDinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderOnlyLibDinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
