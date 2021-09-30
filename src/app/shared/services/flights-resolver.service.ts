import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { from, Observable } from 'rxjs';
import { IFlight } from 'src/app/flight';
import { FpapaManagerService } from './fpapa-manager.service';

@Injectable({
  providedIn: 'root',
})
export class FlightsResolverService implements Resolve<IFlight[]> {
  constructor(private fpapManagerService: FpapaManagerService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IFlight[]> {
    let returnedResult = this.fpapManagerService.GetFlights();
    let returnedResult$ = from(returnedResult);
    return returnedResult$;
  }
}
