const oneFunc = myVar => { 
    console.log('Hello world after ' + myVar + ' seconds.');
    // setTimeout(oneFunc(8), 8000);
};

setTimeout(oneFunc, 4000, 4);

setTimeout(oneFunc, 8000, 8);