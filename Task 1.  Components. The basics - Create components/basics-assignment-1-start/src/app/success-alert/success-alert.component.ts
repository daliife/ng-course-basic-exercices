import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  @Input() successMessage = 'This is a message to inform you that you did something right. Carry on and never give up!';

  constructor() { }

  ngOnInit() { }

}
