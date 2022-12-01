import { Component, OnInit } from '@angular/core';
import { TargetHit } from '@app/model/target-hit.model';
import { DartBoardHitEventService } from '@app/service/dart-board-hit-event.service';
import { concat, delay, filter, mergeMap, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'dart-scoreboard',
  templateUrl: './dart-scoreboard.component.html',
  styleUrls: ['./dart-scoreboard.component.scss'],
})
export class DartScoreboardComponent implements OnInit {
  public score = 501;

  constructor(private readonly hitListener: DartBoardHitEventService) {}

  ngOnInit(): void {
    this.hitListener
      .onHit$()
      .pipe(
        filter((hitData) => this.score - hitData.score >= 0),
        tap((hitData) => (this.score = this.score - hitData.score))
      )
      .subscribe();
  }
}
