//Node does execute a module, it first wraps the file in a 
//function first

//Browsers do not have this wrapping function, node does.

//It returns module.exports at the end of each file
// console.log(arguments);


exports.a = 42;
module.exports.b = 37