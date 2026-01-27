
import { Routes } from '@angular/router';
import { ServiceComp } from './service-comp/service-comp';
import { GitComp } from './git-comp/git-comp';
import { PraticeComp } from './pratice-comp/pratice-comp';
import { RComp } from './r-comp/r-comp';
import  {NestedRou} from './nested-rou/nested-rou';             
export const routes: Routes = [

    {
        path:"git",
        component:GitComp,
        children:[
            {
                path:"dhoni",
                component:NestedRou
            }
        ]


    }
    ,{
        path:"pratice",
        component:PraticeComp
    }
];
