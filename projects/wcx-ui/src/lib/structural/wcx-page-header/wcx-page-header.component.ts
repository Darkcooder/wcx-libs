import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wcx-page-header',
  templateUrl: './wcx-page-header.component.html',
  styleUrls: ['./wcx-page-header.component.less']
})
export class WcxPageHeaderComponent implements OnInit {

  @Input() name = 'Страница без названия';

  constructor() { }

  ngOnInit(): void {
  }

}
