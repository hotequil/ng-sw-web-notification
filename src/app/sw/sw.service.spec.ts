import { TestBed } from '@angular/core/testing';

import { SwService } from './sw.service';

describe('SwService', () => {
    let service: SwService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SwService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
