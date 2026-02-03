import { HttprouterComp } from './httprouter-comp/httprouter-comp';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComp } from './first-comp/first-comp';

import { PraticeComp } from "./pratice-comp/pratice-comp";
import { ServiceComp } from "./service-comp/service-comp";
import { GitComp } from './git-comp/git-comp';
import { RComp } from "./r-comp/r-comp";
import { TemplateDriven } from "./template-driven/template-driven";
import { GroceryList } from "./grocery-list/grocery-list";
import { EmpComp } from "./emp-comp/emp-comp";
import { HttpComp } from './http-comp/http-comp';
import { SignUp } from "./sign-up/sign-up";
import { ChildComp } from './child-comp/child-comp';
import { ParentComp } from "./parent-comp/parent-comp";
import { RegisterComp } from "./register-comp/register-comp";
import { CutomDir } from "./cutom-dir/cutom-dir";
import { DynamicParent } from "./dynamic-parent/dynamic-parent";
import { TaskLogin } from "./task-login/task-login";
import { TaskSignup } from "./task-signup/task-signup";
import { IncCounter } from "./inc-counter/inc-counter";
import { DisCounter } from "./dis-counter/dis-counter";
import { ServiceCal } from "./service-cal/service-cal";
import {  TaskCustomComponent } from "./task-custom/task-custom";


@Component({
  selector: 'app-root',
  imports: [HttprouterComp, RouterOutlet, HttpComp, FirstComp, ChildComp, PraticeComp, ServiceComp, GitComp, RComp, TemplateDriven, GroceryList, EmpComp, SignUp, ChildComp, ParentComp, RegisterComp, CutomDir, DynamicParent, TaskLogin, TaskSignup, IncCounter, DisCounter, ServiceCal, TaskCustomComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vijayhcl');
}
