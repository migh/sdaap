import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  window: any;
  router: Router;
  isFullScreen: boolean;
  showHeader: boolean;

  updateUiState() {
    const route = this.router.url;
    const isFullScreen = this.window.fullScreen;
    this.showHeader = !(isFullScreen && (route === '/' || route === '/bigscreen'));
  }

  constructor(router: Router) {
    this.window = (<any>window);
    this.router = router;
    this.updateUiState();
  }

  ngOnInit() {
    const rezizeObs: Observable<any> = Observable.fromEvent(this.window,'resize').throttleTime(1500);
    rezizeObs.subscribe( ev => {
      this.updateUiState();
    });
  }
}
