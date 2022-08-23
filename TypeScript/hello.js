function convert(item) {
    switch (typeof item) {
        case 'number':
            return Math.floor(item);
        case 'string':
            return item.toUpperCase();
        case 'boolean':
            return item ? 'yes' : 'no';
        default:
            return 'any';
    }
}
var a = convert('hello');
var b = convert(1.32);
var c = convert(false);
