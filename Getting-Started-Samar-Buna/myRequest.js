var request = require('request');

request('https://www.quora.com/What-is-the-best-book-to-learn-Angular-7', function(error, response, body){
    if(!error && response.statusCode === 200){
        console.log(body);
    }
})