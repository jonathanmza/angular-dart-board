import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { DartBoardComponent } from './dart-board/dart-board.component';
import { DartScorePopupComponent } from './dart-score-popup/dart-score-popup.component';
import { DartScoreboardComponent } from './dart-scoreboard/dart-scoreboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  declarations: [AppComponent, DartBoardComponent, DartScorePopupComponent, DartScoreboardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
