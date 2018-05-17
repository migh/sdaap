import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Flight } from '../../commons/flight';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-bigscreen',
  templateUrl: './bigscreen.component.html',
  styleUrls: ['./bigscreen.component.scss']
})
export class BigscreenComponent implements OnInit {
  arrivals: Flight[];
  departures: Flight[];
  refreshInterval: number;
  ticker: Observable<number>;
  user: any;

  constructor(
    route: ActivatedRoute,
    fligths: FlightsService
  ) {
    this.arrivals = fligths.getArrivals();
    this.departures = fligths.getDepartures();
    route.data.subscribe(this.getRouteData.bind(this));
  }

  getRouteData(data) {
    this.refreshInterval = data.refreshInterval || 5000;
  }

  ngOnInit() {
    this.ticker = Observable.interval(this.refreshInterval);
  }

}
