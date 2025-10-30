console.log("Start");

setTimeout(function() {
    console.log("Executed after 2 seconds.");
}, 2000);

console.log("End"); 

console.log("Print Name");

function greet(name) {
 console.log("My name is: ", name);
}

setTimeout(greet, 3000 , "Shahid");

console.log("Set Interval");

setInterval(function () {
    console.log("This prints every 2 seconds");
}, 2000);
console.log("Interval Functions Ends");

function display(name){
    console.log(name);
}
setInterval(display, 4000, "Shahid");