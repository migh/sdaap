import { Injectable } from '@angular/core';

import { FlightsGenerator } from './flights.generator';
import { Flight, FligthStatus, Direction } from '../../commons/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  flightGen: FlightsGenerator;

  constructor() {
    this.flightGen = new FlightsGenerator;
  }

  getArrivals(): Flight[] {
    return this.flightGen.generateFlights(50, Direction.ARRIVALS);
  }

  getDepartures(): Flight[] {
    return this.flightGen.generateFlights(50, Direction.DEPARTURES);
  }
}
