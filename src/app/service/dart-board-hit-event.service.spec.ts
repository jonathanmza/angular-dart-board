import { TestBed } from '@angular/core/testing';

import { DartBoardHitEventService } from './dart-board-hit-event.service';

describe('DartBoardHitEventService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: DartBoardHitEventService }],
    })
  );

  it('should be created', () => {
    expect(TestBed.inject(DartBoardHitEventService)).toBeTruthy();
  });

  it('should emit a score of 60', (done) => {
    // Given
    const service = TestBed.inject(DartBoardHitEventService);
    const score = { score: 690, x: 0, y: 0 };

    service.onHit$().subscribe((data) => {
      expect(data?.score).toEqual(690);
      done();
    });

    service.emitScoreOnHit(score);
  });
});
