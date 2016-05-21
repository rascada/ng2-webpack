import { Component } from 'angular2/core';

@Component({
    selector: 'app',
    template: `
      <h1> {{ title }} </h1>
      <p> {{ model }} </p>
      <input [(ngModel)]='model' placeholder='two-way binding'>`,
})
class AppComponent {
  title: string = 'angular2 boilerplate';
  model: string = 'model';
}

export default AppComponent;
