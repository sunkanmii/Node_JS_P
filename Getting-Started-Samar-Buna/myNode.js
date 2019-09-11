//Asynchronous functions with callbacks

// var handleResults  = function(error, results){

// }
//Use nemed functions to avoid the christmas ree problem
//
var os = require('os');
var myNode_1 = require('./myNode_1.js');

var toMb = function(f){
    return(Math.round((f/1024/1024) *100) /100);
}

console.log('Host: ' + os.hostname());
console.log('15 min. load average: ' + os.loadavg()[2]);
console.log(toMb(os.freemem()) + ' of ' + toMb(os.totalmem())  + ' Mb free');

console.log(myNode_1.evenDoubler(4, 2));
console.log(myNode_1.myVar);
