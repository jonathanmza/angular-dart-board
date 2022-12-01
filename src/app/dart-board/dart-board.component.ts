import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DartBoardHitEventService } from '@app/service/dart-board-hit-event.service';

@Component({
  selector: 'dart-board',
  templateUrl: './dart-board.component.svg',
  styleUrls: ['./dart-board.component.scss'],
})
export class DartBoardComponent implements AfterViewInit {
  @ViewChildren('targetZone')
  private readonly targetZones!: QueryList<ElementRef>;

  constructor(private readonly boardHitEvent: DartBoardHitEventService) {}

  ngAfterViewInit(): void {
    this.targetZones.forEach((targetZone) => this.addClickEventListener(targetZone));
  }

  private addClickEventListener(targetZone: ElementRef<SVGElement>): void {
    return targetZone.nativeElement.addEventListener('click', (clickEvent) =>
      this.emitTargetHitEvent(clickEvent)
    );
  }

  private emitTargetHitEvent($event: MouseEvent) {
    const targetSVGElement = $event.target as SVGElement;
    const score = parseInt(targetSVGElement.dataset['score'] ?? '0');
    this.boardHitEvent.emitScoreOnHit({ x: $event.clientX, y: $event.clientY, score: score });
  }
}
