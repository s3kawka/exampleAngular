import { TestBed, inject } from '@angular/core/testing';

import { EngineersTrashGuardService } from './engineers-trash-guard.service';

describe('EngineersTrashGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngineersTrashGuardService]
    });
  });

  it('should be created', inject([EngineersTrashGuardService], (service: EngineersTrashGuardService) => {
    expect(service).toBeTruthy();
  }));
});
