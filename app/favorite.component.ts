import  {Component,Input,EventEmitter,Output} from 'angular2/core';



@Component({
    selector:'favortite',
    templateUrl:'app/template/favorite.template.html'
    ,inputs:['isFavorite']
    ,styles:[`.glyphicon-star {
color: orange;
}`]
})
export class  FavoriteComponent {
    isFavorite=false;
    @Output ()change =new EventEmitter();
    onClik(){
        this.isFavorite=!this.isFavorite;
        this.change.emit({newValue:this.isFavorite});
    }
}
