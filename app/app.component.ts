import {Component, Renderer, ElementRef} from 'angular2/core';

@Component({
	selector: 'clearable-input',
	templateUrl: './app/app.component.template.html'
})

export class AppComponent {
	private inputModel: string;
	private placeholder: string = 'Type some text';
	private renderer: Renderer;
	private element: ElementRef;

	constructor(renderer: Renderer, element: ElementRef){
		this.renderer = renderer;
		this.element = element;
	}

	onKeyUp() {
		console.log('onKeyUp: ', this.inputModel);
  }

	onKeyDown() {
		console.log('this.inputModel: ', this.inputModel);
	}

	onFocus(){
		console.log('this.inputModel: ', this.inputModel);
	}

	onBlur(){
		console.log('onBlur: ', this.inputModel);
	}

	clearInput(){
		this.inputModel = "";
		console.log('clearing input');
	}
}
