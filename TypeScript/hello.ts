class Person {
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
    let val: string = document.querySelector('#text1').value;
    let msg: Element = document.querySelector('#msg');

    let arr: string[] = val.split(',');
    let obj: Person = null;
    
    if (arr.length == 2) {
        obj = new Person(arr[0], parseInt(arr[1]));
    } else if (arr.length == 3) {
        obj = new Student(arr[0], parseInt(arr[1]), parseInt(arr[2]))
    }
    msg.innerHTML = obj.print();

}