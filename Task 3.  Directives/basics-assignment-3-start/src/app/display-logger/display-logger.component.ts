import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-logger',
  templateUrl: './display-logger.component.html',
  styleUrls: ['./display-logger.component.css']
})
export class DisplayLoggerComponent implements OnInit {

  showDetails = false;
  logs = [];

  constructor() { }

  ngOnInit() { }

  onToggle() {
    this.logs.push({
      id: this.logs.length + 1,
      date: Date.now(),
      isShown: this.showDetails
    });
    this.showDetails = !this.showDetails;
  }

  isNotEmpty(): boolean {
    return this.logs && this.logs.length > 0;
  }

  onClear(): void {
    this.logs = [];
  }

}
