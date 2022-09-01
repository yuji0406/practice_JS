import { Component } from '@angular/core';

export class MyFormModel {
    constructor(
        public msg: string
    ) {}
}

@Component({
    selector: 'form-app',
    template: `
        <h1>Angular web</h1>
        <p>{{ message }}</p>
        <form>
            <input type="text" id="msg" name="msg" [(ngModel)]="model.msg">
            <input type="button" value="click" (click)="onSubmit();">
        </form>
    `
})

export class FormComponent {
    model = new MyFormModel('message....');
    onSubmit() {
        this.message = 'you typed: ' + this.model.msg;
    }
}