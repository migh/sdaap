import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-splash-message',
  templateUrl: './splash-message.component.html',
  styleUrls: ['./splash-message.component.scss']
})
export class SplashMessageComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
