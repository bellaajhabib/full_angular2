import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";

@Component({
    selector: 'my-app',
    template: `
<div (click)="onDivClik()" class="panel-heading"[ngStyle]="{'color': color, 'font-size': '24px', 'font-weight': 'bold','width':'400px','background-color':'red'}">
      <button  [ngClass]="myClasses.first " [class.active]="isActive" class="btn" (click)="onClick($event)" >Submit</button>
    <button  [ngClass]="myClasses.second " [class.active]="isActive" class="btn"  on-click="onClick($event)">Submit</button>
    <input [(ngModel)]="color" />
<div [ngClass]="{'small-text': true, 'red': true}">object of classes</div>

    </div>
`,


})
export class AppBootstrapComponent {
    isActive=true;
    private myClasses: any;
    onDivClik() {
        console.log('clicked div');
    }
    onClick($event){
        $event.stopPropagation();
        console.log('clicked',$event);
    }

    constructor() {

        this.myClasses = {'first':'btn-info', 'second':'btn-danger'};
    }

}
