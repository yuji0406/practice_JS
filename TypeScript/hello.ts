function convert<T> (item: T): string {
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

let a: string = convert<string>('hello');
let b: number = convert<number>(1.32);
let c: boolean = convert<boolean>(false);