import {Component} from 'angular2/core';

@Component({
	selector: 'my-app',
	template: '<input [(ngModel)]="input.value" placeholder="name" class="angular-clearable-input" /><p>{{input.value}}<p>'
})
export class AppComponent {
	isDirty = false;

	public input: Input = {
     value: 'Type here please'
  };

}
