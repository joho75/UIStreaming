// package: FPAPManager
// file: src/app/protos/service_fpapaManager.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class FpapaManagerRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FpapaManagerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FpapaManagerRequest): FpapaManagerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FpapaManagerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FpapaManagerRequest;
  static deserializeBinaryFromReader(message: FpapaManagerRequest, reader: jspb.BinaryReader): FpapaManagerRequest;
}

export namespace FpapaManagerRequest {
  export type AsObject = {
  }
}

export class FlightListData extends jspb.Message {
  clearFlightsList(): void;
  getFlightsList(): Array<Flight>;
  setFlightsList(value: Array<Flight>): void;
  addFlights(value?: Flight, index?: number): Flight;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlightListData.AsObject;
  static toObject(includeInstance: boolean, msg: FlightListData): FlightListData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlightListData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlightListData;
  static deserializeBinaryFromReader(message: FlightListData, reader: jspb.BinaryReader): FlightListData;
}

export namespace FlightListData {
  export type AsObject = {
    flightsList: Array<Flight.AsObject>,
  }
}

export class Flight extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFlightidentifier(): string;
  setFlightidentifier(value: string): void;

  getFlightnumber(): string;
  setFlightnumber(value: string): void;

  getAirline(): string;
  setAirline(value: string): void;

  getAirlineoperator(): string;
  setAirlineoperator(value: string): void;

  hasFlightorigindate(): boolean;
  clearFlightorigindate(): void;
  getFlightorigindate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFlightorigindate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAircraft(): boolean;
  clearAircraft(): void;
  getAircraft(): Aircraft | undefined;
  setAircraft(value?: Aircraft): void;

  getDepartureairporticao(): string;
  setDepartureairporticao(value: string): void;

  getDestinationairporticao(): string;
  setDestinationairporticao(value: string): void;

  hasUtcscheduledtimedeparture(): boolean;
  clearUtcscheduledtimedeparture(): void;
  getUtcscheduledtimedeparture(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUtcscheduledtimedeparture(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUtcscheduledtimeofarrival(): boolean;
  clearUtcscheduledtimeofarrival(): void;
  getUtcscheduledtimeofarrival(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUtcscheduledtimeofarrival(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getEtops(): boolean;
  setEtops(value: boolean): void;

  getDecompressioncheck(): boolean;
  setDecompressioncheck(value: boolean): void;

  getFlightplanid(): string;
  setFlightplanid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Flight.AsObject;
  static toObject(includeInstance: boolean, msg: Flight): Flight.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Flight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Flight;
  static deserializeBinaryFromReader(message: Flight, reader: jspb.BinaryReader): Flight;
}

export namespace Flight {
  export type AsObject = {
    id: string,
    flightidentifier: string,
    flightnumber: string,
    airline: string,
    airlineoperator: string,
    flightorigindate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    aircraft?: Aircraft.AsObject,
    departureairporticao: string,
    destinationairporticao: string,
    utcscheduledtimedeparture?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    utcscheduledtimeofarrival?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    etops: boolean,
    decompressioncheck: boolean,
    flightplanid: string,
  }
}

export class Aircraft extends jspb.Message {
  getAircrafttype(): string;
  setAircrafttype(value: string): void;

  getRegistration(): string;
  setRegistration(value: string): void;

  hasEquipment(): boolean;
  clearEquipment(): void;
  getEquipment(): Equipment | undefined;
  setEquipment(value?: Equipment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Aircraft.AsObject;
  static toObject(includeInstance: boolean, msg: Aircraft): Aircraft.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Aircraft, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Aircraft;
  static deserializeBinaryFromReader(message: Aircraft, reader: jspb.BinaryReader): Aircraft;
}

export namespace Aircraft {
  export type AsObject = {
    aircrafttype: string,
    registration: string,
    equipment?: Equipment.AsObject,
  }
}

export class Equipment extends jspb.Message {
  clearItem10aList(): void;
  getItem10aList(): Array<string>;
  setItem10aList(value: Array<string>): void;
  addItem10a(value: string, index?: number): string;

  clearItem18List(): void;
  getItem18List(): Array<string>;
  setItem18List(value: Array<string>): void;
  addItem18(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Equipment.AsObject;
  static toObject(includeInstance: boolean, msg: Equipment): Equipment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Equipment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Equipment;
  static deserializeBinaryFromReader(message: Equipment, reader: jspb.BinaryReader): Equipment;
}

export namespace Equipment {
  export type AsObject = {
    item10aList: Array<string>,
    item18List: Array<string>,
  }
}

