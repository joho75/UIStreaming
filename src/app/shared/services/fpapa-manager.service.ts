import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { IFlight } from 'src/app/flight';
import {
  FlightListData,
  FpapaManagerRequest,
} from './generated/service_fpapaManager_pb';
import { FPAPManager } from './generated/service_fpapaManager_pb_service';

@Injectable({
  providedIn: 'root',
})
export class FpapaManagerService {
  constructor() {}

  async GetFlights(): Promise<IFlight[]> {
    const getFpapaManagerRequest = new FpapaManagerRequest();
    let flightList: IFlight[] = [];

    const request = new Promise<any>((resolve, reject) => {
      grpc.invoke(FPAPManager.GetWebFlights, {
        request: getFpapaManagerRequest,
        host: 'https://localhost:5000',
        onMessage: (message: FlightListData) => {
          var flightListData = message.toObject() as FlightListData.AsObject;

          flightList = flightListData.flightsList.map(
            (flight) =>
              <IFlight>{
                flightNumber: flight.flightidentifier,
                id: flight.id,
                Departure: flight.departureairporticao,
                Destination: flight.destinationairporticao,
                flightStatusIsCritical: flight.decompressioncheck,
                Scheduledtimedeparture: this.convertToDate(
                  flight.utcscheduledtimedeparture?.seconds || 0
                ),
              }
          );
          resolve(flightList);
        },
        onEnd: (
          code: grpc.Code,
          msg: string | undefined,
          trailers: grpc.Metadata
        ) => {
          if (code == grpc.Code.OK) {
            console.log('all flights downloaded');
          } else {
            console.log('hit an error', code, msg, trailers);
          }
        },
      });
    });
    return request;
  }
  convertToDate(timestamp: number): string {
    if (timestamp == null) {
      return '';
    } else {
      const date = new Date(timestamp).toLocaleDateString('de-CH');
      return date;
    }
  }
}
