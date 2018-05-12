import { Component, OnInit, Input } from '@angular/core';

import { FligthStatus } from '../flight';

const positive = [FligthStatus.ONTIME, FligthStatus.ARRIVED, FligthStatus.BOARDING];
const negative = [FligthStatus.CANCELED, FligthStatus.DELAYED];
const neutral = [FligthStatus.ATGATE, FligthStatus.INRANGE];

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() status: FligthStatus;
  sentiment: string;

  constructor() {}

  ngOnInit() {
    if (positive.includes(this.status)) this.sentiment = 'positive';
    if (negative.includes(this.status)) this.sentiment = 'negative';
    if (neutral.includes(this.status)) this.sentiment = 'neutral';
  }

}
