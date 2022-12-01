/* tslint:disable:no-unused-variable */
import { DebugElement, Predicate } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DartBoardComponent } from './dart-board.component';

describe('DartBoardComponent', () => {
  let component: DartBoardComponent;
  let fixture: ComponentFixture<DartBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DartBoardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DartBoardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 82 target zones', () => {
    const isTargetZone: Predicate<DebugElement> = (element) => element.attributes['data-score'] != null;
    expect(fixture.debugElement.queryAll(isTargetZone).length).toBe(82);
  });

  it('should have 20 numbers', () => {
    expect((fixture.nativeElement as SVGElement).querySelector('#numbers')?.childElementCount).toBe(20);
  });

  it('should have numbers from 1 to 20', () => {
    const dartElementNumbers = (fixture.nativeElement as SVGElement).querySelectorAll('#numbers g');
    const allDartNumbers = Array.from(dartElementNumbers).map((element) => parseInt(element.id));

    expect(allDartNumbers.sort()).toEqual(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].sort()
    );
  });

  it('should have triple target zone', () => {
    const dartElementNumbers = (fixture.nativeElement as SVGElement).querySelectorAll('#triple-zone path');

    const allDartNumbers = Array.from(dartElementNumbers).map((element) =>
      parseInt(element.getAttribute('data-score') ?? '0')
    );

    expect(allDartNumbers.sort()).toEqual(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((value) => value * 3).sort()
    );
  });

  it('should have double target zone', () => {
    const dartElementNumbers = (fixture.nativeElement as SVGElement).querySelectorAll('#double-zone path');

    const allDartNumbers = Array.from(dartElementNumbers).map((element) =>
      parseInt(element.getAttribute('data-score') ?? '0')
    );

    expect(allDartNumbers.sort()).toEqual(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((value) => value * 2).sort()
    );
  });

  it('should have one 50 and 25 target zones', () => {
    const centerZoneElement = (fixture.nativeElement as SVGElement).querySelector('#center-zone');

    const aroundCircleValue = centerZoneElement?.children.item(0)?.getAttribute('data-score');
    const circleValue = centerZoneElement?.children.item(1)?.getAttribute('data-score');

    expect(aroundCircleValue).toBe("25");
    expect(circleValue).toBe("50");
  });
});
