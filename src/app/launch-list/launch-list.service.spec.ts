import { TestBed, inject } from '@angular/core/testing';

import { LaunchListService } from './launch-list.service';

describe('LaunchListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaunchListService]
    });
  });

  it('should be created', inject([LaunchListService], (service: LaunchListService) => {
    expect(service).toBeTruthy();
  }));
});
