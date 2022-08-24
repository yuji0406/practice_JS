class Person {
    public name: string;
    private _age: number;

    get age(): number {
        return this._age;
    }
    set age(y: number) {
        this._age = y < 0 ? 0 : y;
    }

    constructor(n: string, y: number) {
        this.name = n;
        this.age = y;
    }

    print(): string {
        let msg: string = '<p>My name is ' + this.name + '. I am ' + this.age + 'years old. </p>';
        return msg;
    }
}

function doClick(): void {
    let val: string = document.querySelector('#text1').value;
    let arr: string[] = val.split(',');

    let obj: Person = new Person(arr[0], parseInt(arr[1]));

    let msg: Element = document.querySelector('#msg');
    msg.innerHTML = obj.print();
}