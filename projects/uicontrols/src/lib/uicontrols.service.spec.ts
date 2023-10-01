import { TestBed } from '@angular/core/testing';

import { UicontrolsService } from './uicontrols.service';

describe('UicontrolsService', () => {
  let service: UicontrolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UicontrolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
