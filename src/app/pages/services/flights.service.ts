import { Injectable } from '@angular/core';

import { Flight, FligthStatus, Direction } from '../../commons/flight';

const flights: Flight[] = [
  {
    location: 'Mexico City',
    carrier: 'Aeromig',
    flight: 1028,
    time: new Date('2018-5-10T23:58:31.187-06:00'),
    gate: 'G12',
    status: FligthStatus.ONTIME,
    direction: Direction.ARRIVALS
  },
  {
    location: 'Mexico City',
    carrier: 'Aeromig',
    flight: 1028,
    time: new Date('2018-5-10T23:58:31.187-06:00'),
    gate: 'G12',
    status: FligthStatus.CANCELED,
    direction: Direction.ARRIVALS
  },
  {
    location: 'Mexico City',
    carrier: 'Aeromig',
    flight: 1028,
    time: new Date('2018-5-10T23:58:31.187-06:00'),
    gate: 'G12',
    status: FligthStatus.DELAYED,
    direction: Direction.ARRIVALS
  },
  {
    location: 'Mexico City',
    carrier: 'Aeromig',
    flight: 1028,
    time: new Date('2018-5-10T23:58:31.187-06:00'),
    gate: 'G12',
    status: FligthStatus.ATGATE,
    direction: Direction.ARRIVALS
  },
  {
    location: 'Mexico City',
    carrier: 'Aeromig',
    flight: 1028,
    time: new Date('2018-5-10T23:58:31.187-06:00'),
    gate: 'G12',
    status: FligthStatus.INRANGE,
    direction: Direction.ARRIVALS
  },
  {
    location: 'Mexico City',
    carrier: 'Aeromig',
    flight: 1028,
    time: new Date('2018-5-10T23:58:31.187-06:00'),
    gate: 'G12',
    status: FligthStatus.ARRIVED,
    direction: Direction.ARRIVALS
  },
  {
    location: 'Mexico City',
    carrier: 'Aeromig',
    flight: 1028,
    time: new Date('2018-5-10T23:58:31.187-06:00'),
    gate: 'G12',
    status: FligthStatus.BOARDING,
    direction: Direction.ARRIVALS
  }
];

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor() { }

  test() {
    return 'Testing';
  }

  getArrivals(): Flight[] {
    return flights;
  }

  getDepartures(): Flight[] {
    return flights;
  }
}
