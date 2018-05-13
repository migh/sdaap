import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Flight } from '../../commons/flight';
import { FlightsService } from '../services/flights.service';
import { RESET_FLIGHT, SELECT_FLIGHT } from '../../commons/reducers/flight.reducer';

interface PWAState {
  flight: Flight;
}

@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.scss']
})
export class PwaComponent implements OnInit {
  arrivals: Flight[];
  departures: Flight[];
  source: Flight[];
  flight$: Observable<Flight>;

  constructor(fligths: FlightsService, private store: Store<PWAState>) {
    this.flight$ = store.pipe(select('flight'));
    this.arrivals = fligths.getArrivals();
    this.departures = fligths.getDepartures();
  }

  testClick(){
    const flightPoller = this.flight$.subscribe( currentFlight => {
      console.log('Pressed');
      console.log(currentFlight && currentFlight.flight);
    });
    flightPoller.unsubscribe();
  }

  flightSelection() {
    return (flight) => {
      this.store.dispatch({ type: SELECT_FLIGHT, payload: flight});
    };
  }

  ngOnInit() {
    this.source = (this.arrivals).concat(this.departures);
  }

}
