import {Component} from "angular2/core";
@Component({
    selector:'contact-form',
    templateUrl:'app/contact-form.component.html'

})
export class ContactComponent {
log(x){
    console.log(x);
}
    onSubscribe(x) {
    console.log(x);
}
}