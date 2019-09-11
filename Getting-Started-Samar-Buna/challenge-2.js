let j = 5;
let myVar;

function printHW(){    
    for (let i = 0; i < 1 && j > 0; i++) {
        console.log('Hello World ' + (6 - j));
        j = j - 1;
    }

    if(j === 0){ 
        clearInterval(myVar);
        console.log('Done!')
    }
}

if(j > 0){
    myVar = setInterval(printHW, 1000);
}