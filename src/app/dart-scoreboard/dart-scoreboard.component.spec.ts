import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DartScoreboardComponent } from './dart-scoreboard.component';

describe('DartScoreboardComponent', () => {
  let component: DartScoreboardComponent;
  let fixture: ComponentFixture<DartScoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DartScoreboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DartScoreboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
