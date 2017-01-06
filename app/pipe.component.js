System.register(['angular2/core', "./summary.pipe", "./bootstrap.panel.component", "./contact.component"], function(exports_1, context_1) {
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
    var core_1, summary_pipe_1, bootstrap_panel_component_1, contact_component_1;
    var PipeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (bootstrap_panel_component_1_1) {
                bootstrap_panel_component_1 = bootstrap_panel_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            PipeComponent = (function () {
                function PipeComponent() {
                    this.course = {
                        tilte: "Angular 2 for Beiginners",
                        rating: 4.9745875554848484,
                        student: 5981,
                        price: 150,
                        releaseDate: new Date()
                    };
                    this.post = {
                        title: 'AngularTutorila for Beginners',
                        body: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\nCras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\nCras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\nCras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\n"
                    };
                }
                PipeComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<div class=\"container\">\n    <div class=\"row panel\">\n    \n    {{course.tilte}}\n    <br/>\n    {{course.student}}\n    <br/>\n    <div class=\"alert-danger\">\n    {{course.rating|number:'2.2-2'}}\n    </div>\n    <br/>\n    {{course.price|currency}}\n    <br/>\n    {{course.releaseDate}}\n    <br/>\n    {{course|json}}\n    </div>\n<div class=\"row marketing\">\n<div class=\"jumbotron\">\n        <h1>Custom Pipe</h1>\n       <p class=\"lead\" [ngStyle]=\"{\n      border:'solid 6px orange',\n      'letter-spacing' : '1px'\n       }\">{{post.body|summaryPipe:50}}</p>\n      \n      </div>\n</div>\n<bs-panel ><div class=\"body\">This is the body</div> </bs-panel>\n<contact-form></contact-form>\n</div>\n", pipes: [summary_pipe_1.SummaryPipe], directives: [bootstrap_panel_component_1.BootstrapPanelComponet, contact_component_1.ContactComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PipeComponent);
                return PipeComponent;
            }());
            exports_1("PipeComponent", PipeComponent);
        }
    }
});
//# sourceMappingURL=pipe.component.js.map