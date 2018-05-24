// Define a simple "class"
function Accommodation() {
  this.isAlarmed = false;
}

var AlarmSystem = {
  arm: function(message) {
    this.isAlarmed = true;
    console.log(message);
  },
  disarm: function(message) {
    this.isAlarmed = false;
    console.log(message);
  }
};

var myHouse = new Accommodation();
AlarmSystem.arm.call(myHouse, "Alarm activated");
console.log(myHouse.isAlarmed); // true

// The same effect can be achieved using ‘apply’, this time the parameters are sent as an array
AlarmSystem.disarm.apply(myHouse, ["Alarm deactivated"]);
console.log(myHouse.isAlarmed); // false
