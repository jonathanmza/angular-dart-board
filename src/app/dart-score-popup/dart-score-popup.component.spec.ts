import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { DartBoardHitEventService } from '@app/service/dart-board-hit-event.service';
import { of } from 'rxjs';

import { DartScorePopupComponent } from './dart-score-popup.component';

describe('DartScorePopupComponent', () => {
  let component: DartScorePopupComponent;
  let fixture: ComponentFixture<DartScorePopupComponent>;
  const stub = {
    onHit$: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DartScorePopupComponent],
      providers: [{ provide: DartBoardHitEventService, useValue: stub }],
      teardown: { destroyAfterEach: true },
    }).compileComponents();

    fixture = TestBed.createComponent(DartScorePopupComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    jest.spyOn(stub, 'onHit$').mockReturnValue(of());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values on init', () => {
    // Given
    fixture.detectChanges();

    expect(component.score).toBeUndefined();
    expect(component.top).toBe('0px');
    expect(component.left).toBe('0px');
    expect(component.show).toEqual(false);
  });

  /* it('should have a score of 20', fakeAsync(() => {
    // Given
    fixture.detectChanges();
    TestBed.inject(DartBoardHitEventService).emitScoreOnHit({ score: 20, x: 5, y: 5 });

    expect(component.score).toBe(20);
    expect(component.top).toBe('15px');
    expect(component.left).toBe('5px');
    expect(component.show).toBe(true);

    tick(500);

    expect(component.show).toBe(false);
  })); */

  it('should have a score of 20', fakeAsync(() => {
    // Given
    const dartHitService = TestBed.inject(DartBoardHitEventService);
    jest
      .spyOn(dartHitService, 'onHit$')
      .mockReturnValue(of({ score: 20, x: 5, y: 5 }));
    fixture.detectChanges();

    expect(component.score).toBe(20);
    expect(component.top).toBe('15px');
    expect(component.left).toBe('5px');
    expect(component.show).toBe(true);
    expect(
      (fixture.nativeElement as HTMLElement).querySelector('div')?.classList
    ).toContain('show');

    tick(500);

    expect(component.show).toBe(false);
    fixture.detectChanges();
    expect(
      (fixture.nativeElement as HTMLElement).querySelector('div')?.classList
    ).toContain('hide');
  }));
});
