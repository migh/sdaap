import { Component, OnInit, Input } from '@angular/core';

import { Flight, FligthStatus } from '../flight';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.scss']
})
export class FlightsListComponent implements OnInit {
  @Input() source: Flight[];
  @Input() rowClickHandler: Function;
  @Input() paginated: boolean;

  constructor() {}

  onClick(item) {
    if (this.rowClickHandler) this.rowClickHandler(item);
  }

  ngOnInit() {
    const fieldIds = Object.keys(Flight.fieldNames);
    const fieldNames = fieldIds.map( id => Flight.fieldNames[id] );
    const source = this.source;
  }

}
