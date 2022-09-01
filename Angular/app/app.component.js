"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
class MyFormModel {
    constructor(msg) {
        this.msg = msg;
    }
}
exports.MyFormModel = MyFormModel;
let FormComponent = class FormComponent {
    constructor() {
        this.model = new MyFormModel('message....');
    }
    onSubmit() {
        this.message = 'you typed: ' + this.model.msg;
    }
};
FormComponent = __decorate([
    core_1.Component({
        selector: 'form-app',
        template: `
        <h1>Angular web</h1>
        <p>{{ message }}</p>
        <form>
            <input type="text" id="msg" name="msg" [(ngModel)]="model.msg">
            <input type="button" value="click" (click)="onSubmit();">
        </form>
    `
    }), 
    __metadata('design:paramtypes', [])
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=app.component.js.map