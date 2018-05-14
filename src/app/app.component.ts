import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  window: any;
  router: Router;
  isFullScreen: boolean;
  showHeader: boolean;
  authSubscription: Subscription;
  isAuth: boolean;

  constructor(router: Router, private authService: AuthService, private _ngZone: NgZone) {
    this.isAuth = false;
    this.window = (<any>window);
    this.router = router;
    this.updateUiState();
    this.authService.authChanges.subscribe( this.updateAuthState.bind(this) );
  }

  ngOnInit() {
    const rezizeObs: Observable<any> = Observable.fromEvent(this.window, 'resize').throttleTime(1500);
    rezizeObs.subscribe(ev => {
      this.updateUiState();
    });
  }

  updateAuthState( state ) {
    this._ngZone.run(() => {
      if (state.logged) {
        this.isAuth = true;
        // this.currentUser = state.user;
      } else {
        this.isAuth = false;
      }
    });
  }

  updateUiState() {
    const route = this.router.url;
    const isFullScreen = this.window.fullScreen;
    this.showHeader = !(isFullScreen && (route === '/' || route === '/bigscreen'));
  }

  onLogout() {
    this.authService.logout();
  }
}
