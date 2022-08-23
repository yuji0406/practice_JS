function convert(item) {
    switch (typeof item) {
        case 'number':
            return Math.floor(item).toString();
        case 'string':
            return item.toUpperCase();
        case 'boolean':
            return item ? 'yes' : 'no';
    }
}
function doClick() {
    var val = 'japan';
    var msg = document.querySelector('#msg');
    msg.innerHTML = convert(val);
}
