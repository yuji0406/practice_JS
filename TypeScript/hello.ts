function convert(item: number): string;
function convert(item: string): string;
function convert(item: boolean): string;

function convert(item: any): string {
    switch (typeof item) {
        case 'number':
            return Math.floor(item).toString();
        case 'string':
            return item.toUpperCase();
        case 'boolean':
            return item ? 'yes' : 'no';
    }
}

function doClick(): void {
    let val: any = 'japan';
    let msg: Element = document.querySelector('#msg');
    msg.innerHTML = convert(val);
}