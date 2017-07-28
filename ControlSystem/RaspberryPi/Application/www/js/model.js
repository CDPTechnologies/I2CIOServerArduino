var client = new studio.api.Client(window.location.host);

var route = function (routing, isInput=true) {
  var obj = {value: null,setValue:null};
  client.find(routing).then(function (child) {
    obj.setValue = child.setValue;
    child.subscribeToValues(function (value, time) {
      obj.value = value;
    });
  });
  return obj
}

var app = new Vue({
  el: '#app',
  data: {
    microseconds: route("RaspberryPi.I2CIOServer.Arduino.Servo.Microseconds")   
  }
});