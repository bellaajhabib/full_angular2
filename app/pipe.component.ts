import {Component} from 'angular2/core';
import {SummaryPipe} from "./summary.pipe";
import {BootstrapPanelComponet} from "./bootstrap.panel.component";
import {ContactComponent} from "./contact.component";


@Component({
    selector:'my-app',
    template:`
<div class="container">
    <div class="row panel">
    
    {{course.tilte}}
    <br/>
    {{course.student}}
    <br/>
    <div class="alert-danger">
    {{course.rating|number:'2.2-2'}}
    </div>
    <br/>
    {{course.price|currency}}
    <br/>
    {{course.releaseDate}}
    <br/>
    {{course|json}}
    </div>
<div class="row marketing">
<div class="jumbotron">
        <h1>Custom Pipe</h1>
       <p class="lead" [ngStyle]="{
      border:'solid 6px orange',
      'letter-spacing' : '1px'
       }">{{post.body|summaryPipe:50}}</p>
      
      </div>
</div>
<bs-panel ><div class="body">This is the body</div> </bs-panel>
<contact-form></contact-form>
</div>
`,pipes:[SummaryPipe],directives:[BootstrapPanelComponet,ContactComponent]

})

export class  PipeComponent{
 course= {
     tilte:"Angular 2 for Beiginners",
     rating:4.9745875554848484,
     student:5981,
     price:150,
     releaseDate: new Date()
 }
 post={
     title:'AngularTutorila for Beginners',
     body:`Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
`
 }
}
