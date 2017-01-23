/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CollaspableService } from './collaspable.service';

describe('CollaspableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollaspableService]
    });
  });

  it('should ...', inject([CollaspableService], (service: CollaspableService) => {
    expect(service).toBeTruthy();
  }));
});
