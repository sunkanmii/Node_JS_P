console.dir(global, {depth: 0})

//Every node process starts the infinite 'Event Loop', but when
//the process has no asynchronous process to perform, the Event Loop 
//will exit and the OS will terminate that Node process