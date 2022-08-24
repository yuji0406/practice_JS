class Person {
    public name: string;
    public age: number;
    public static tag = 'p';

    constructor(n: string, y: number) {
        this.name = n;
        this.age = y;
    }

    print(): string {
        let msg: string = '<' + Person.tag + '>My name is ' + this.name + '. I am ' + this.age + 'years old. </' + Person.tag + '>';
        return msg;
    }
}

class Student extends Person {
    public grade: number;

    constructor(n: string, y: number, g: number) {
        super(n, y);
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


function doClick(): void {
    let msg: Element = document.querySelector('#msg');
    let val: string = document.querySelector('#text1').value;

    let arr: string[] = val.split(',');
    
    let obj: Person = new Person(arr[0], parseInt(arr[1]));
    Person.tag = 'h1';
    msg.innerHTML = obj.print();
}