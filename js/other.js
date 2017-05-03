//document.writeln("Hello World!");
//console.info("I'm in <script> tags!");
console.log("Hello javascript!");
var number = parseInt(prompt("Dialog to enter integer.\n Enter integer(up to 2**54): "));
var randnumber = Math.floor(Math.random() * number);
alert("Here is random number between zero and your number: \n" + randnumber + "\n\n\n");
console.log("Your random number is " + randnumber);
