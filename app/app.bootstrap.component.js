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
    var AppBootstrapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppBootstrapComponent = (function () {
                function AppBootstrapComponent() {
                    this.isActive = true;
                    this.myClasses = { 'first': 'btn-info', 'second': 'btn-danger' };
                }
                AppBootstrapComponent.prototype.onDivClik = function () {
                    console.log('clicked div');
                };
                AppBootstrapComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log('clicked', $event);
                };
                AppBootstrapComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<div (click)=\"onDivClik()\" class=\"panel-heading\"[ngStyle]=\"{'color': color, 'font-size': '24px', 'font-weight': 'bold','width':'400px','background-color':'red'}\">\n      <button  [ngClass]=\"myClasses.first \" [class.active]=\"isActive\" class=\"btn\" (click)=\"onClick($event)\" >Submit</button>\n    <button  [ngClass]=\"myClasses.second \" [class.active]=\"isActive\" class=\"btn\"  on-click=\"onClick($event)\">Submit</button>\n    <input [(ngModel)]=\"color\" />\n<div [ngClass]=\"{'small-text': true, 'red': true}\">object of classes</div>\n\n    </div>\n",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppBootstrapComponent);
                return AppBootstrapComponent;
            }());
            exports_1("AppBootstrapComponent", AppBootstrapComponent);
        }
    }
});
//# sourceMappingURL=app.bootstrap.component.js.map