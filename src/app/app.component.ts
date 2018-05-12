import { Component, OnInit } from '@angular/core';
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

  constructor(router: Router, private authService: AuthService) {
    this.window = (<any>window);
    this.router = router;
    this.updateUiState();
  }

  ngOnInit() {
    const rezizeObs: Observable<any> = Observable.fromEvent(this.window,'resize').throttleTime(1500);
    this.authService.initAuthListener();
    this.authSubscription = this.authService.authChange.subscribe( authStatus => {
      this.isAuth = authStatus;
    });
    rezizeObs.subscribe( ev => {
      this.updateUiState();
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
