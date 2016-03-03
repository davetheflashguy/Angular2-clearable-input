import {Component, Renderer, ElementRef} from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
	selector: 'clearable-input',
	templateUrl: './app/app.component.template.html'
})

export class AppComponent {
	private inputModel: string;
	private placeholder: string = 'Type some text';
	private renderer: Renderer;
	private element: ElementRef;
	private isOn: Boolean;

	constructor(renderer: Renderer, element: ElementRef){
		this.renderer = renderer;
		this.element = element;
		this.isOn = false;
	}

	public onKeyUp() {
		this.checkClearState();
  }

	public onKeyDown() {
		this.checkClearState();
	}

	public onFocus(){
		this.checkClearState();
	}

	public onBlur(){
		this.checkClearState();
	}

	public clearInput(){
		this.resetInput();
	}

	private resetInput() {
		this.inputModel = "";
		this.checkClearState();
	}

	private checkClearState() {
		if (typeof(this.inputModel) !== 'undefined') {
			if (this.inputModel.length > 0) {
				this.isOn = true;
			}
			else {
				this.isOn = false;
			}
		}
	}

}
