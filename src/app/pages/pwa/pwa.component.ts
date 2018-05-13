import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

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
export class PwaComponent implements OnInit, OnDestroy {
  arrivals: Flight[];
  departures: Flight[];
  source: Flight[];
  flight$: Observable<Flight>;
  flightSelectionModal: boolean;
  flightAvailable: boolean;
  flightPoller: Subscription;
  currentFlight: Flight;
  modalFlight: Flight;

  constructor(fligths: FlightsService, private store: Store<PWAState>) {
    this.flight$ = store.pipe(select('flight'));
    this.arrivals = fligths.getArrivals();
    this.departures = fligths.getDepartures();
    this.flightSelectionModal = false;
    this.flightAvailable = false;
  }

  flightSelection() {
    return (flight) => {
      if (this.currentFlight !== flight) {
        this.modalFlight = flight;
        this.flightSelectionModal = true;
      } else {
        this.store.dispatch({ type: RESET_FLIGHT });
      }
    };
  }

  cancelFlightSelection() {
    this.flightSelectionModal = false;
  }

  confirmFlightSelection() {
    this.store.dispatch({ type: SELECT_FLIGHT, payload: this.modalFlight });
    this.flightSelectionModal = false;
  }

  ngOnInit() {
    this.source = (this.arrivals).concat(this.departures);

    this.flightPoller = this.flight$.subscribe(currentFlight => {
      if (currentFlight && currentFlight.flight) {
        this.flightAvailable = true;
        this.currentFlight = currentFlight;
        this.flightSelectionModal = true;
      } else {
        this.flightAvailable = false;
        this.currentFlight = null;
      }
    });
  }

  ngOnDestroy() {
    this.flightPoller.unsubscribe();
  }

  arrivalsFilter() {
    this.source = this.arrivals;
  }

  departuresFilter() {
    this.source = this.departures;
  }
}
