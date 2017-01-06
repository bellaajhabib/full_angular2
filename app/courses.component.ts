import {Component} from 'angular2/core';
import {CourseService} from "./services/course.service";
import { OnInit} from 'angular2/core'
import {AutoGrowDirective} from "./auto-grow.directive";

@Component ({
  selector:'courses',
  template:`<h2>Course</h2>
{{title}}
<input type="text" autoGrow width="120"/>
<ul>
<li *ngFor="#course of courses">
{{course}}

</li>
</ul>
`,providers:[CourseService]
,directives:[AutoGrowDirective]

})
export class  CoursesComponent implements OnInit{
  courses=["Course1","Course2","Course3"];
  private dataService;
  constructor( courseService:CourseService) {
    this.dataService = courseService;

  }
  ngOnInit(){
    this.courses=this.dataService.getCourses();
  }

title="The title of courses";


}
