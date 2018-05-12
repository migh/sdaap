export class Flight {
  static fieldNames:any = {
    location: 'Location',
    carrier: 'Carrier',
    flight: 'Flight',
    time: 'Time',
    gate: 'Gate',
    status: 'Status',
    direction: 'Direction',
  };
  location: string;
  carrier: string;
  flight: number;
  time: Date;
  gate: string;
  status: FligthStatus;
  direction: Direction;
}

export enum FligthStatus {
  ONTIME = 'On time',
  CANCELED = 'Canceled',
  DELAYED = 'Delayed',
  ATGATE = 'At gate',
  INRANGE = 'In range',
  BOARDING = 'Boarding',
  ARRIVED = 'Arrived'
}

export enum Direction {
  ARRIVALS = 'arrivals',
  DEPARTURES = 'departures'
}
