/**
 * Created by Chandu on 1/31/16.
 */

//var process = require('process');
const spawn = require('child_process').spawn;

const ls = spawn('ls');

ls.stdout.on('data', function (data){
    console.log(data.toString()); // this prints 'Hello world.js' at the last

})


// if we need to open on a specific browser, we need to use '-a', 'browser name'

//const open = spawn('open', ['-a','Google Chrome', 'http://www.yahoo.com']);
//const open = spawn('open', ['-a','firefox', 'http://www.yahoo.com']);

/*
const open = spawn('open', ['-a', 'safari', 'http://www.yahoo.com']);

open.stdout.on('data', function (data){
    console.log(data.toString()); // this prints 'Hello world.js'

})
*/

console.log('hello world');  // this prints first

console.log(process.argv);  // this prints second  ==>  [ '/usr/local/bin/node',  '/Users/Chandu/WebstormProjects/Training/Intro to node/Hello world.js' ]




