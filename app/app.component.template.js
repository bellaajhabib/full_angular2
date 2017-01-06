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
    var AppComponentTemplate;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponentTemplate = (function () {
                function AppComponentTemplate() {
                    this.viewMode = 'map';
                    this.courses = ['Course 1', 'Course 2', 'Course 3'];
                }
                AppComponentTemplate = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<div *ngIf=\"courses.length>0\">\nList of courses \n</div>\n<div *ngIf=\"courses.length==0\">\nYou don't have any courses yet.\n</div>\n\n<ul class=\"nav nav-pills\" >\n<li [class.active]=\"viewMode=='map'\"  ><a (click)=\"viewMode='map'\" >Map View</a></li>\n<li [class.active]=\"viewMode=='list'\"><a (click)=\"viewMode='list'\">List view</a></li>\n</ul>\n<div [ngSwitch]=\"viewMode\">\n<template [ngSwitchWhen]=\"'map'\" ] ngSwitchDefault>Map View Content</template>\n<template [ngSwitchWhen]=\"'list'\" ]>List View Content</template>\n</div>\n<ul>\n<li *ngFor=\"#course of courses, #i=index\">{{ i+1}}:{{\ncourse}}\n\n</li>\n<template ngFor [ngForOf]=\"courses\" #course #i=index><li>\n{{i+1}} : {{course}}\n</li> </template>\n</ul>\n\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponentTemplate);
                return AppComponentTemplate;
            }());
            exports_1("AppComponentTemplate", AppComponentTemplate);
        }
    }
});
//# sourceMappingURL=app.component.template.js.map