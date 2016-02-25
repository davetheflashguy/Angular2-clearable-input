import {Component} from 'angular2/core';

@Component({
	selector: 'my-app',
	template: '<input #box [(ngModel)]="input.value" placeholder="name" class="angular-clearable-input" (focus)="onFocus(box.value)" (keyup)="onKeyUp(box.value)" (blur)="onBlur(box.value)" /><p>{{input.value}}<p>'
})
export class AppComponent {
	isDirty = false;

	public input: Input = {
     defaultValue: 'Type here please',
		 value: ''
  };

	onKeyUp(value:string) {
		console.log('onKeyUp: ', value);
  }

	onFocus(value:string){
		console.log('onFocus: ', value);
	}

	onBlur(value:string){
		console.log('onBlur: ', value);
	}
}
