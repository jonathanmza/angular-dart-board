import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TargetHit } from '../model/target-hit.model';

@Injectable({
  providedIn: 'root',
})
export class DartBoardHitEventService {
  private readonly hitBoardEvent = new Subject<TargetHit>();

  constructor() {}

  public emitScoreOnHit(targetHit: TargetHit): void {
    this.hitBoardEvent.next(targetHit);
  }

  public onHit$(): Observable<TargetHit> {
    return this.hitBoardEvent.asObservable();
  }
}
