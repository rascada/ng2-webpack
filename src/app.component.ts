import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
      <h1> {{ helloMessage }} </h1>
      <label> write your name </label>
      <input [(ngModel)]='model' placeholder='two-way binding'>`,
})
export class AppComponent {
    title: string = 'angular 2 boilerplate';
    model: string;

    get helloMessage() {
        const {model, title} = this;

        return model ? `hello ${model}!` : title;
    }
}
