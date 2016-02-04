/**
 * Created by Chandu on 1/31/16.
 */

// Print out data in the order of the async operation

// To run this, use
// $ node 3\ Async.js GOOG AAPL YHOO


var http = require('http');
// npm install request
// https://www.npmjs.com/package/request
var request = require('request');
var process = require('process');
// npm install async
// https://www.npmjs.com/package/async
var async = require('async');

// console.log(process.argv);

// var symbol = 'GOOG';
var symbol = process.argv[2];

// How many stock symbols are provided and print them
var symbols = process.argv.slice(2);
console.log(symbols);

// create a function which has the symbol bound to it
// var bound = getStockQuote.bind(null, 'GOOG');
// todo: Array.prototype - map filter reduce forEach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

var arr_fns = symbols.map(function (symbol) {
    return getStockQuote.bind(null, symbol);
});


async.parallel(arr_fns, function (err, data) {
    if (err) console.log(err);
    console.log(data);
});

return;

// to work with async, every function should take in a callback as the first paramter

function getStockQuote(symbol, callback) {
    request({
        url: 'http://download.finance.yahoo.com/d/quotes.csv?s=' + symbol + '&f=l1',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36'
        }
    }, function (err, res, data) {
        if (res.statusCode === 200) {
            callback(null, data.trim());
        } else {
            callback(res.statusCode, null);
        }
        // console.log(data);
    });
}

