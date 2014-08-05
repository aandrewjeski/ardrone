var Cylon = require('cylon');

Cylon.robot({&lt;  connection: { name: 'ardrone', adaptor: 'ardrone', port: '192.168.1.1' },
 device: {name: 'drone', driver: 'ardrone'},

 work: function(my) {
my.drone.takeoff();
   after((7).seconds(), function(){
   my.drone.front(0.1);
   });
   after((11).seconds(), function() {
   my.drone.animate('flipBehind', 5)
   });
after((13).seconds(), function() {
  my.drone.land();
});
after((15).seconds(), function() {
  my.drone.stop();
});
 }
}).start();
