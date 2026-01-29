
import { Routes } from '@angular/router';
import { ServiceComp } from './service-comp/service-comp';
import { GitComp } from './git-comp/git-comp';
import { PraticeComp } from './pratice-comp/pratice-comp';
import { RComp } from './r-comp/r-comp';
import  {NestedRou} from './nested-rou/nested-rou';             
import { HttpComp } from './http-comp/http-comp';
import { NotFound } from './not-found/not-found';
import { ChildComp } from './child-comp/child-comp';
export const routes: Routes = [

 

    {
        path:"child",
        component:ChildComp
    }
];
//    // {
    //     path:"git",
    //     component:GitComp,
    //     children:[
    //         {
    //             path:"dhoni",
    //             component:NestedRou
    //         }
    //     ]


    // }
    // ,{
    //     path:"pratice",
    //     component:PraticeComp
    // },
    // //htttp routing
    
    // {
    //     path:"http",
    //     component:HttpComp
    //  },
    // //  {
    // //     path:"**",
    // //     component:NotFound
      
    // // }