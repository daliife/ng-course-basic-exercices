import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  @Input() warningMessage = 'Something went wrong, and it looks like that it is a 99% your fault.';

  constructor() { }

  ngOnInit() { }

}
