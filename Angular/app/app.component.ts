import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:
        `<h1>{{ title }}</h1><p>{{ message }}</p>`
})

export class AppComponent{
    title = "Hello!";
    message = "くそが！！"
}