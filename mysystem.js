var os = require('os');

var message = 'Here is info about os';

var sysarray = new Array('Type: '+os.type(),
						'Node version: '+process.version,
						'Platform'+os.platform(),
						'Hostname'+os.hostname(),
						'Total mem: '+os.totalmem(),
						'Free mem: '+os.freemem(),
						'Uptime'+os.uptime()
);

console.log(message);

var arraylenght = sysarray.length;

i = 0;

while (i<arraylenght){
	console.log(sysarray[i]);
	i++;
}