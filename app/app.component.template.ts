import {Component} from 'angular2/core';


@Component({
    selector: 'my-app',
    template: `<div *ngIf="courses.length>0">
List of courses 
</div>
<div *ngIf="courses.length==0">
You don't have any courses yet.
</div>

<ul class="nav nav-pills" >
<li [class.active]="viewMode=='map'"  ><a (click)="viewMode='map'" >Map View</a></li>
<li [class.active]="viewMode=='list'"><a (click)="viewMode='list'">List view</a></li>
</ul>
<div [ngSwitch]="viewMode">
<template [ngSwitchWhen]="'map'" ] ngSwitchDefault>Map View Content</template>
<template [ngSwitchWhen]="'list'" ]>List View Content</template>
</div>
<ul>
<li *ngFor="#course of courses, #i=index">{{ i+1}}:{{
course}}

</li>
<template ngFor [ngForOf]="courses" #course #i=index><li>
{{i+1}} : {{course}}
</li> </template>
</ul>

`

})

export class AppComponentTemplate {
    viewMode='map';
courses=['Course 1','Course 2','Course 3'];
}
