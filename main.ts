// Synchronous Code Execution:
console.log("Start");

// Synchronous operation: blocking for 2 seconds
function waitTwoSeconds() {
  const start = new Date().getTime();
  while (new Date().getTime() - start < 2000) {}
  console.log("Waited for 2 seconds");
}

waitTwoSeconds();

console.log("End");

// Asynchronous Callbacks:
console.log("Start");

// Asynchronous operation: setTimeout
setTimeout(function() {
  console.log("Asynchronous operation completed after 2 seconds");
}, 2000);

console.log("End");
