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
var Student = /** @class */ (function () {
    function Student(n, y, g) {
        this.name = n;
        this.age = y;
        this.grade = g;
    }
    Student.prototype.print = function () {
        var msg = '<p>My name is '
            + this.name
            + '. I am '
            + this.age
            + ' years old. '
            + 'My grade is'
            + this.grade
            + '. </p>';
        return msg;
    };
    return Student;
}());
var data = [];
data.push(new Person('taro', 40));
data.push(new Student('jiro', 20, 2));
data.push(new Person('saburo', 10));
function doClick() {
    var msg = document.querySelector('#msg');
    var val = document.querySelector('#text1').value;
    var obj = data[val];
    msg.innerHTML = obj.print();
}
