import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wcx-app-header',
  templateUrl: './wcx-app-header.component.html',
  styleUrls: ['./wcx-app-header.component.less']
})
export class WcxAppHeaderComponent implements OnInit {

  @Input() name = 'Application name';

  constructor() { }

  ngOnInit(): void {
  }

}
