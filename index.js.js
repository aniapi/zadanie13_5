process.stdin.setEncoding('utf-8');

var os = require('os');
var colors = require('colors');


process.stdin.on('readable', function() {
    // tutaj treść tego co ma się wykonać w momencie odczytania wejścia.
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else if (instruction === '/version') {
            process.stdout.write('Wersja to:' + process.versions.node + '\n' + 'Język systemowy to:' + process.env.node + '\n');
        }

        else {
            process.stderr.write('Wrong instruction!\n');
        }
    }
});

process.versions;
process.env;