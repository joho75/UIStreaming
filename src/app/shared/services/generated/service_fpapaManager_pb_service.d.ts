// package: FPAPManager
// file: src/app/protos/service_fpapaManager.proto

import * as src_app_protos_service_fpapaManager_pb from '../generated/service_fpapaManager_pb';
import { grpc } from '@improbable-eng/grpc-web';

type FPAPManagerGetWebFlights = {
  readonly methodName: string;
  readonly service: typeof FPAPManager;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_app_protos_service_fpapaManager_pb.FpapaManagerRequest;
  readonly responseType: typeof src_app_protos_service_fpapaManager_pb.FlightListData;
};

export class FPAPManager {
  static readonly serviceName: string;
  static readonly GetWebFlights: FPAPManagerGetWebFlights;
}

export type ServiceError = {
  message: string;
  code: number;
  metadata: grpc.Metadata;
};
export type Status = { details: string; code: number; metadata: grpc.Metadata };

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(
    type: 'data',
    handler: (message: ResT) => void
  ): BidirectionalStream<ReqT, ResT>;
  on(
    type: 'end',
    handler: (status?: Status) => void
  ): BidirectionalStream<ReqT, ResT>;
  on(
    type: 'status',
    handler: (status: Status) => void
  ): BidirectionalStream<ReqT, ResT>;
}

export class FPAPManagerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getWebFlights(
    requestMessage: src_app_protos_service_fpapaManager_pb.FpapaManagerRequest,
    metadata?: grpc.Metadata
  ): ResponseStream<src_app_protos_service_fpapaManager_pb.FlightListData>;
}
