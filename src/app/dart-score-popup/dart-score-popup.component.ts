import { Component, OnInit } from '@angular/core';
import { DartBoardHitEventService } from '@app/service/dart-board-hit-event.service';
import { delay, tap } from 'rxjs';

@Component({
  selector: 'dart-score-popup',
  templateUrl: './dart-score-popup.component.html',
  styleUrls: ['./dart-score-popup.component.scss'],
})
export class DartScorePopupComponent implements OnInit {
  public score: number | undefined = undefined;
  public show = false;
  public top = '0px';
  public left = '0px';

  private readonly TOP_OFFSET_PX = 10;

  constructor(private readonly boardEvent: DartBoardHitEventService) {}

  ngOnInit(): void {
    this.showScoreOnHit$().subscribe();
  }

  public showScoreOnHit$() {
    return this.boardEvent.onHit$().pipe(
      tap((hitData) => (this.top = hitData.y + this.TOP_OFFSET_PX + 'px')),
      tap((hitData) => (this.left = hitData.x + 'px')),
      tap((hitData) => (this.score = hitData.score)),
      tap(() => (this.show = true)),
      delay(500),
      tap(() => (this.show = false))
    );
  }
}
