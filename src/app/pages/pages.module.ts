import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from '../app-routing.module';
import { CommonsModule } from '../commons/commons.module';
import { BigscreenComponent } from './bigscreen/bigscreen.component';
import { PwaComponent } from './pwa/pwa.component';
import { MyFlightComponent } from './my-flight/my-flight.component';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    ClarityModule,
    AppRoutingModule
  ],
  declarations: [BigscreenComponent, PwaComponent, MyFlightComponent]
})
export class PagesModule { }
