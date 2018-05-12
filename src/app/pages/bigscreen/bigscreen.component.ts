import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Flight } from '../../commons/flight';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-bigscreen',
  templateUrl: './bigscreen.component.html',
  styleUrls: ['./bigscreen.component.scss']
})
export class BigscreenComponent implements OnInit {
  @Input() refreshInterval: number;
  arrivals: Flight[];
  departures: Flight[];
  refresh: Observable<number>;

  constructor(fligths: FlightsService) {
    this.arrivals = fligths.getArrivals();
    this.departures = fligths.getDepartures();
    // this.isFullScreen = (<any>window).fullScreen;
  }

  ngOnInit() {
    this.refreshInterval = this.refreshInterval || 5000;
    this.refresh = Observable.interval(this.refreshInterval);

    this.refresh.subscribe( ev => {
      // console.log(ev);
    });
  }

}
