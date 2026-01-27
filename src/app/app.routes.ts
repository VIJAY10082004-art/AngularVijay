import { Routes } from '@angular/router';
import { ServiceComp } from './service-comp/service-comp';
import { GitComp } from './git-comp/git-comp';
import { PraticeComp } from './pratice-comp/pratice-comp';

export const routes: Routes = [

    {
        path:"git",
        component:GitComp
    }
    ,{
        path:"pratice",
        component:PraticeComp
    }
];
