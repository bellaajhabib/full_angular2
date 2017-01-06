import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {FavoriteComponent} from "./favorite.component";
import {LikeComponent} from "./like.component";
import {VoterComponent} from "./voter.component";

@Component({
    selector: 'my-app',
    template: '<h1>HAbib</h1><courses></courses>' +

    '<favortite [isFavorite]="post.isFavorite" (change)="onFavortiteChange($event)"></favortite><br><br><br><br>'+
        '<like [totalLikes]="tweet.totalLike" [iLike]="tweet.iLike"></like><br><br><br><br>'+
    '<voter></voter>',

    directives:[CoursesComponent,FavoriteComponent,LikeComponent,VoterComponent]

})
export class AppComponent {
  tweet={
      totalLike:10,
      iLike:false
  }
    post={
        title:"Title",
        isFavorite:true
    }
    onFavortiteChange($event) {
        console.log($event.newValue);
    }
}
