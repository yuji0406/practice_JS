var Person = /** @class */ (function () {
    function Person(n, y) {
        this.name = n;
        this.age = y;
    }
    Person.prototype.print = function () {
        var msg = '<p>My name is ' + this.name + '. I am ' + this.age + 'years old. </p>';
        return msg;
    };
    return Person;
}());
function doClick() {
    var val = document.querySelector('#text1').value;
    var arr = val.split(',');
    var obj = new Person(arr[0], parseInt(arr[1]));
    var msg = document.querySelector('#msg');
    msg.innerHTML = obj.print();
}
