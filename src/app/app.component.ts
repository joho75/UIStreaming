import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IFlight } from './flight';
import { FpapaManagerService } from './shared/services/fpapa-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'UIStreaming';
  flightList: IFlight[] = [];

  constructor(private service: FpapaManagerService) {}

  displayedColumns: string[] = [
    'flightNumber',
    'id',
    'flightPlanId',
    'flightStatusIsCritical',
    'Departure',
    'Destination',
    'Scheduledtimedeparture',
  ];

  ngOnInit(): void {
    this.service.GetFlights().then((v) => {
      this.flightList = v;
    });
  }
}
