import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigscreenComponent } from './bigscreen/bigscreen.component';
import { PwaComponent } from './pwa/pwa.component';
import { MyFlightComponent } from './my-flight/my-flight.component';
import { CommonsModule } from '../commons/commons.module';
import { ClarityModule } from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    ClarityModule
  ],
  declarations: [BigscreenComponent, PwaComponent, MyFlightComponent]
})
export class PagesModule { }
