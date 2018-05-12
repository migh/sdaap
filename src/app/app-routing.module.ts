import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BigscreenComponent } from './pages/bigscreen/bigscreen.component';
import { PwaComponent } from './pages/pwa/pwa.component';
import { MyFlightComponent } from './pages/my-flight/my-flight.component';

const routes: Routes = [
{ path: '', redirectTo: '/bigscreen', pathMatch: 'full' },
{ path: 'bigscreen', component: BigscreenComponent },
{ path: 'app', component: PwaComponent },
{ path: 'my', component: MyFlightComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
