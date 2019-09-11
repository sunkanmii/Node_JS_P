// import util from './resource';
let request = require('request');

let myHTML = request('http://www.pluralsight.com/');

myHTML.on('data', function(chunk){
    console.log('>>>Data>>> ' + chunk);
});

myHTML.on('end', function(){
    console.log('>>>Done!>>>>');
})