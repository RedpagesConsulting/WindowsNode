var Service = require('node-windows').Service;
 
// Create a new service object
var svc = new Service({
  name:'Shell App',
  description: 'Application to update oracle database users password.',
  script: 'C:\\Users\\User\\Documents\\GitHub\\shellapp\\app.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});
 
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});
 
svc.install();