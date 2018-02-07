var os = require('os');
var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
               	OSinfo.print();
                break;
            // case '/getOSuptime':
            // 	OSuptime.print();
            	// var uptime = os.uptime();
            	// console.log('Czas:', (uptime / 60).toFixed(0), 'min.', (uptime % 60).toFixed(0), 'sek.');
            	// console.log('Czas:', (uptime / 3600).toFixed(0), 'godz.', ((uptime % 3600) / 60).toFixed(0), 'min.', (uptime % 60).toFixed(0), 'sek.');
            	// break;
            default:
                process.stderr.write('Wrong instruction!\n');
            };
           }
        });
        
  //       function getOSinfo() {
  //           var type = os.type();
  //           if(type === 'Darwin') {
  //               type = 'OSX';
  //           } else if(type === 'Windows_NT') {
  //               type = 'Windows';
  //           }
  //           var release = os.release();
  //           var cpu = os.cpus()[0].model;
  //           var uptime = os.uptime();
  //           var userInfo = os.userInfo();
  //           console.log('System:', type);
  //           console.log('Release:', release);
  //           console.log('CPU model:', cpu);
  //           console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
  //           console.log('User name:', userInfo.username);
  //           console.log('Home dir:', userInfo.homedir);
		// };