import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs/Rx';

import { Flight } from '../../commons/flight';
import { LocalStorageService } from '../services/local-storage.service';
import { RESET_FLIGHT, SELECT_FLIGHT } from '../../commons/reducers/flight.reducer';

interface PWAState {
  flight: Flight;
}

@Component({
  selector: 'app-my-flight',
  templateUrl: './my-flight.component.html',
  styleUrls: ['./my-flight.component.scss']
})
export class MyFlightComponent implements OnInit {
  flight$: Observable<Flight>;
  flightPoller: Subscription;
  currentFlight: Flight;
  flightAvailable: boolean;

  constructor(private store: Store<PWAState>, private ls: LocalStorageService) {
    this.flight$ = store.pipe(select('flight'));
    this.flightAvailable = false;
  }

  checkLocalStorage() {
    const flight = this.ls.load('flight');
    if (flight) {
      this.store.dispatch({ type: SELECT_FLIGHT, payload: flight });
    }
  }

  ngOnInit() {
    this.checkLocalStorage();

    this.flightPoller = this.flight$.subscribe( currentFlight => {
      if (currentFlight) {
        this.flightAvailable = true;
        this.currentFlight = currentFlight
      } else {
        this.flightAvailable = false;
      }
    });
  }

  ngOnDestroy() {
    this.flightPoller.unsubscribe();
  }

}
