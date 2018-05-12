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
  static getPositiveStatuses(): FligthStatus[] {
    return [FligthStatus.ONTIME, FligthStatus.ARRIVED, FligthStatus.BOARDING];
  };
  static getNeutralStatuses(): FligthStatus[] {
    return [FligthStatus.ATGATE, FligthStatus.INRANGE];
  };
  static getNegativeStatuses(): FligthStatus[] {
    return [FligthStatus.CANCELED, FligthStatus.DELAYED];
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
