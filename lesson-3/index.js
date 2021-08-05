const fs = require('fs');
const es = require('event-stream');

let lineNumber = 0;
const writeStream89 = fs.createWriteStream('89.123.1.41_requests.log', { flags: 'w', encoding: 'utf8' });
const writeStream34 = fs.createWriteStream('34.48.240.111_requests.log', { flags: 'w', encoding: 'utf8' });
const readStream = fs.createReadStream('access.log')
    .pipe(es.split())
    .pipe(es.mapSync(function (line) {
        readStream.pause();
        if (line.includes('89.123.1.41')) {
            writeStream89.write(line);
            writeStream89.write('\n');
        }
        if (line.includes('34.48.240.111')) {
            writeStream34.write(line);
            writeStream34.write('\n');
        }
        lineNumber += 1;
        if (lineNumber % 100000 === 0) console.log(`Обработано ${(lineNumber * 100 / 57311046).toFixed(1)} %`);
        readStream.resume();
    })
        .on('error', function (error) {
            console.log('Error: ', error);
        })
        .on('end', function () {
            console.log('End')
        })
    );