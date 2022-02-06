import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wcx-lg-card',
  templateUrl: './lg-card.component.html',
  styleUrls: ['./lg-card.component.less']
})
export class LgCardComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
