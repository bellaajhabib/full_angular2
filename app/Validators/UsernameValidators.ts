import {Control, ControlGroup} from 'angular2/common';


export  class UsernameValidators {
    static shouldBeUnique(control:Control){
        // return new Promise((resolve,rejct)=>{
        //     setTimeout(function(){
        //         if(control.value=="mosh")
        //             resolve({shouldBeUnique:true});
        //         else
        //             resolve(null);
        //     },1000);
        // });
    }
    static cannotContainSpace(control: Control) {
        if (control.value.indexOf(' ') >= 0) return {cannotConatinSpace: true};

            return null;


    }

}