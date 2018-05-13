import { airports, carriers } from './flights.data';
import { Flight, FligthStatus, Direction } from '../../commons/flight';

function rand(max, min = 0): number {
  return min +Math.round((Math.random() * ((max-min)*1000)) % (max-min));
}

export class FlightsGenerator {
  constructor() {
  }

  createLocation() {
    const loc = airports[rand(airports.length - 1)];
    return `${loc.code} - ${loc.name}, ${loc.location}`;
  }

  createCarrier() {
    const carrier = carriers[rand(carriers.length - 1)];
    return carrier.name;
  }

  createFlightNumber(min = 100, max = 10000) {
    return rand(max, min);
  }

  // 86400 => day length in seconds, Date is in milliseconds
  createTime(): Date {
    const now = new Date;
    const offset = rand(86400) * 1000;
    return new Date(now.valueOf() + ( rand(1) ? offset : -offset ));
  }

  createGate(qty = 16) {
    return 'G' + rand(qty, 1);
  }

  // 900 * 1000 = fifteen minutes
  createStatus(flightTime: Date, threshold = 900 * 1000) {
    const now = new Date;
    const positive = Flight.getPositiveStatuses();
    const neutral = Flight.getNeutralStatuses();
    const negative = Flight.getNegativeStatuses();
    const far = positive.concat(negative);
    const near = far.concat(neutral);

    if (Math.abs(now.valueOf() - flightTime.valueOf()) < threshold) {
      return neutral[ rand(neutral.length -1) ];
    } else {
      return far[ rand(far.length -1) ];
    }
  }

  createDirection(): Direction {
    const directions = Object.keys(Direction);
    return Direction[ directions[rand(1)] ];
  }

  generateFlight(direction?: Direction): Flight {
    const flightTime = this.createTime();
    return {
      location: this.createLocation(),
      carrier: this.createCarrier(),
      flight: this.createFlightNumber(),
      time: flightTime,
      gate: this.createGate(),
      status: this.createStatus(flightTime),
      direction: direction || this.createDirection()
    }
  }

  generateFlights(len: number, dir?: Direction): Flight[] {
    const flights = [];

    while (flights.length < len) flights.push(this.generateFlight(dir));
    return flights;
  }
}
