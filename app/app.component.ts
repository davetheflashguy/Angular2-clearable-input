import {Component} from 'angular2/core';

@Component({
	selector: 'my-app',
	templateUrl: './app/app.component.template.html'
})

export class AppComponent {
	inputModel;

	placeholder:string = 'Type some text';

	onKeyUp() {
		console.log('onKeyUp: ', this.inputModel);
  }

	onFocus(){
		console.log('this.inputModel: ', this.inputModel);
	}

	onBlur(){
		console.log('onBlur: ', this.inputModel);
	}
}
