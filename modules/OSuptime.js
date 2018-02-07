var os = require('os');
var uptime = os.uptime();
var colors = require('colors');
        
function getOSuptime() {
console.log('Czas:'.magenta, (uptime / 60).toFixed(0), 'min.', (uptime % 60).toFixed(0), 'sek.');
console.log('Czas:'.cyan, (uptime / 3600).toFixed(0), 'godz.', ((uptime % 3600) / 60).toFixed(0), 'min.', (uptime % 60).toFixed(0), 'sek.');
}

exports.print = getOSuptime;