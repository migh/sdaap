import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { BigscreenComponent } from './pages/bigscreen/bigscreen.component';
import { PwaComponent } from './pages/pwa/pwa.component';
import { MyFlightComponent } from './pages/my-flight/my-flight.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const BigscreenRefreshInterval = 3000;

@Injectable()
export class RefreshIntervalResolver implements Resolve<number> {
  constructor() { }

  resolve(): Promise<number> {
    return Promise.resolve(BigscreenRefreshInterval);
  }
}

const routes: Routes = [
  { path: '', redirectTo: '/bigscreen', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bigscreen', component: BigscreenComponent, resolve: { refreshInterval: RefreshIntervalResolver } },
  { path: 'app', component: PwaComponent },
  { path: 'my', component: MyFlightComponent }
  // { path: 'my', component: MyFlightComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, RefreshIntervalResolver]
})
export class AppRoutingModule { }
