import { Component, OnInit } from '@angular/core';

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

  constructor(fligths: FlightsService) {
    this.arrivals = fligths.getArrivals();
    this.departures = fligths.getDepartures();
  }

  ngOnInit() {
  }

}
