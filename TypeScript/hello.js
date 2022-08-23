function calc(price, tax) {
    var tx = 0;
    if (tax) {
        tx = tax;
    }
    else {
        tx = 0.08;
    }
    return Math.floor(price * (1.0 + tx));
}
function doClick() {
    var text1 = document.querySelector('#text1');
    var msg = document.querySelector('#msg');
    msg.innerHTML = calc(text1.value) + '円';
}
