import { Component, OnInit, OnDestroy } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    if (environment.production) {
    }

    console.log('init');
  }

  ngOnDestroy() {}
}
