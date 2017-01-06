
import {Component, Input} from 'angular2/core';

@Component({
    selector: 'like',
    template: `
<div align="center">
    <i
       class="glyphicon glyphicon-heart" 
       [class.highlighted]="iLike"
       (click)="onClick()">
    </i>
    <span>{{ totalLikes }}</span>
    </div>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        
        .highlighted {
            color: deeppink;
        }   
    `]
})
export class LikeComponent {
    @Input() totalLikes = 0;
    @Input() iLike = false;
    
    onClick(){
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }
}