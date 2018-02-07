var os = require('os');
var colors = require('colors');
var OSuptime = require('./OSuptime');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.gray, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.green, cpu);
    OSuptime.print();
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.blue, userInfo.homedir);
}

exports.print = getOSinfo;