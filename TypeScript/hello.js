function print(n, f) {
    var re = f(n);
    return '<p>結果：' + re + '</p>';
}
function doClick() {
    var val = document.querySelector('#text1').value * 1;
    var msg = document.querySelector('#msg');
    var a = function (n) { return n * n; };
    var b = function (n) {
        var total = 0;
        for (var i = 1; i <= n; i++) {
            total += i;
        }
        return total;
    };
    msg.innerHTML = print(val, b);
}
