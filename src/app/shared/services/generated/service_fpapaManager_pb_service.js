// package: FPAPManager
// file: src/app/protos/service_fpapaManager.proto

var src_app_protos_service_fpapaManager_pb = require("./service_fpapaManager_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FPAPManager = (function () {
  function FPAPManager() {}
  FPAPManager.serviceName = "FPAPManager.FPAPManager";
  return FPAPManager;
}());

FPAPManager.GetWebFlights = {
  methodName: "GetWebFlights",
  service: FPAPManager,
  requestStream: false,
  responseStream: true,
  requestType: src_app_protos_service_fpapaManager_pb.FpapaManagerRequest,
  responseType: src_app_protos_service_fpapaManager_pb.FlightListData
};

exports.FPAPManager = FPAPManager;

function FPAPManagerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FPAPManagerClient.prototype.getWebFlights = function getWebFlights(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(FPAPManager.GetWebFlights, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.FPAPManagerClient = FPAPManagerClient;

