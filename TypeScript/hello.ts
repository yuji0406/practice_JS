function calc(price: number, tax?: number): number {
    let tx = 0;
    if (tax) {
        tx = tax;
    } else {
        tx = 0.08;
    }
    return Math.floor(price * (1.0 + tx));
}

function doClick(): void {
    let text1: HTMLInputElement = document.querySelector('#text1');
    let msg: Element = document.querySelector('#msg');
    msg.innerHTML = calc(text1.value) + '円';
}