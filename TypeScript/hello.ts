function print(n: number, f:(number) => number): string {
    var re: number = f(n);
    return '<p>結果：' + re + '</p>';
}

function doClick(): void {
    let val: number = document.querySelector('#text1').value * 1;
    let msg: Element = document.querySelector('#msg');

    let a:(number) => number = (n: number) => n * n;
    let b:(number) => number = (n: number) => {
        let total: number = 0;
        for (let i:number = 1; i <= n; i++) {
            total += i;
        }
        return total;
    };

    msg.innerHTML = print(val, b);
}