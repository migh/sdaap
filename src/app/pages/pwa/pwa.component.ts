import { Component, OnInit } from '@angular/core';

import { Flight } from '../../commons/flight';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.scss']
})
export class PwaComponent implements OnInit {
  arrivals: Flight[];
  departures: Flight[];

  constructor(fligths: FlightsService) {
    this.arrivals = fligths.getArrivals();
    this.departures = fligths.getDepartures();
  }

  ngOnInit() {
  }

}
