import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { FlightsRowComponent } from './flights-row/flights-row.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { SplashMessageComponent } from './splash-message/splash-message.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule
  ],
  exports: [
    FlightsRowComponent,
    FlightsListComponent
  ],
  declarations: [FlightsRowComponent, FlightsListComponent, SplashMessageComponent]
})
export class CommonsModule { }
