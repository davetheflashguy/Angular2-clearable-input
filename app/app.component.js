System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(renderer, element) {
                    this.placeholder = 'Type some text';
                    this.renderer = renderer;
                    this.element = element;
                    this.isOn = false;
                }
                AppComponent.prototype.onKeyUp = function () {
                    this.checkClearState();
                };
                AppComponent.prototype.onKeyDown = function () {
                    this.checkClearState();
                };
                AppComponent.prototype.onFocus = function () {
                    this.checkClearState();
                };
                AppComponent.prototype.onBlur = function () {
                    this.checkClearState();
                };
                AppComponent.prototype.clearInput = function () {
                    this.resetInput();
                };
                AppComponent.prototype.resetInput = function () {
                    this.inputModel = "";
                    this.checkClearState();
                };
                AppComponent.prototype.checkClearState = function () {
                    if (typeof (this.inputModel) !== 'undefined') {
                        if (this.inputModel.length > 0) {
                            this.isOn = true;
                        }
                        else {
                            this.isOn = false;
                        }
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'clearable-input',
                        templateUrl: './app/app.component.template.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map