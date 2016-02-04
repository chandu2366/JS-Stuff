/**
 * Created by Chandu on 1/31/16.
 */

var http = require('http');
// npm install request
// https://www.npmjs.com/package/request
var request = require('request');
var process = require('process');

 console.log(process.argv);

// var symbol = 'GOOG';
var symbol = process.argv[2];

// How many stock symbols are provided and print them
var symbols = process.argv.slice(2);
console.log(symbols);

symbols.forEach(function (symbol) {
    getStockQuote(symbol);
});

return;

function getStockQuote(symbol) {
    request({
        url: 'http://download.finance.yahoo.com/d/quotes.csv?s=' + symbol + '&f=l1',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36'
        }
    }, function (err, res, data) {
        if (res.statusCode === 200) {
            console.log(data.trim());
        }
        // console.log(data);
    });
}