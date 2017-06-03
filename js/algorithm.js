function simple_gcd(a, b) {
    while (b != 0) {
        r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function extended_gcd(a, b) {
    var x = 0;
    var y = 1;
    var u = 1;
    var v = 0;
    while (b != 0) {
        var q = Math.floor(a / b);
        var r = a % b;
        var m = x - u * q;
        var n = y - v * q;
        a = b;
        b = r;
        x = u;
        y = v;
        u = m;
        v = n;
    }
    return [a, y, x, v, u];
}

function squareRoot(a) {
    return Math.sqrt(a);
}

