import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Flight, FligthStatus } from '../flight';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.scss']
})
export class FlightsListComponent implements OnInit, AfterViewInit {
  @Input() source: Flight[];
  @Input() rowClickHandler: Function;
  @Input() paginated: boolean;
  @Input() ticker: Observable<number>;
  @ViewChild('pagination') paginationComponent;
  currentPage: number;
  offset: number = 0;

  constructor() {
  }

  onClick(item) {
    if (this.rowClickHandler) this.rowClickHandler(item);
  }

  ngAfterViewInit() {
    const paginationComponent = this.paginationComponent;
    const pageNumber = paginationComponent.lastPage;
    let pageState = 0;

    this.ticker.subscribe( tick => {
      paginationComponent.currentPage = pageState + 1;
      this.currentPage = pageState + 1;
      this.offset = paginationComponent.pageSize * pageState;
      pageState = ++pageState % pageNumber;
    });
  }

  ngOnInit() {
    const fieldIds = Object.keys(Flight.fieldNames);
    const fieldNames = fieldIds.map( id => Flight.fieldNames[id] );
    const source = this.source;
  }

}
