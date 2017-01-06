
import {Directive,ElementRef,Renderer} from "angular2/core";

@Directive ({
  selector:'[autoGrow]',
    host:{
      '(focus)':'onFocus()',
      '(blur)':'onBlur()',
    }
})

export class AutoGrowDirective {


    constructor (private _el:ElementRef,private  _renderer:Renderer){
    }
onFocus(){
this._renderer.setElementStyle(this._el.nativeElement,'width','400');
this._renderer.setElementStyle(this._el.nativeElement,'border','solid blue');
}
onBlur(){
    this._renderer.setElementStyle(this._el.nativeElement,'width','120');
    this._renderer.setElementStyle(this._el.nativeElement,'border','1');
}
}