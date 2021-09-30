export interface IFlight {
  flightNumber: string;
  id: string;
  flightPlanId?: string;
  flightStatusIsCritical: boolean;
  Std?: number;
  Departure: string;
  Destination: string;
  Scheduledtimedeparture: string;
}
