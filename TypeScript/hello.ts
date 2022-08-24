interface Man {
    name: string;
    age: number;

    print(): string;
}

class Person implements Man {
    public name: string;
    public age: number;

    constructor(n: string, y: number) {
        this.name = n;
        this.age = y;
    }

    print(): string {
        let msg: string = '<p>My name is ' + this.name + '. I am ' + this.age + 'years old. </p>';
        return msg;
    }
}

class Student implements Man {
    public name: string;
    public age: number;
    public grade: number;

    constructor(n: string, y: number, g: number) {
        this.name = n;
        this.age = y;
        this.grade = g;
    }

    print():string {
        let msg: string = 
            '<p>My name is ' 
            + this.name 
            + '. I am ' 
            + this.age 
            + ' years old. '
            + 'My grade is'
            + this.grade 
            + '. </p>';
        return msg;
    }
}
var data: Man[] = [];
data.push(new Person('taro', 40));
data.push(new Student('jiro', 20, 2));
data.push(new Person('saburo', 10));


function doClick(): void {
    let msg: Element = document.querySelector('#msg');
    let val: string = document.querySelector('#text1').value;

    let obj: Man = data[val];

    msg.innerHTML = obj.print();
}