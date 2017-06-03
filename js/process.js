var a = document.getElementById("a");
var b = document.getElementById("b");
var gcd = document.getElementById("gcd");
var xgcd = document.getElementById("xgcd");
//var button = document.getElementById("button");
var sqrt = document.getElementById("sqrt");

function getGcdAndSqrt() {
    var aval = parseInt(a.value);
    console.log("aval = " + aval);
    if (isNaN(aval)) {
        console.log("isNaN(aval) == true");
        aval = 0;
    }
    var bval = parseInt(b.value);
    console.log("bval = " + bval);
    if (isNaN(bval)) {
        console.log("isNaN(bval) == true");
        bval = 0;
    }
    var g = simple_gcd(aval, bval);
    console.log("simple_gcd = " + g);
    var xg = extended_gcd(aval, bval);
    console.log("extended_gcd = " + xg);
    gcd.innerHTML = g;
    xgcd.innerHTML = aval + " * (" + xg[1] + " + " + xg[3] + " * n) + " + bval + " * (" + xg[2] + " + " + xg[4] + " * n) = " + xg[0];
    sqrt.innerHTML = squareRoot(aval);
}


//button.onclick = getGcd;
a.oninput = getGcdAndSqrt;
b.oninput = getGcdAndSqrt;

