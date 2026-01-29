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


@Component({
  selector: 'app-root',
  imports: [HttprouterComp, RouterOutlet, HttpComp, FirstComp, ChildComp, PraticeComp, ServiceComp, GitComp, RComp, TemplateDriven, GroceryList, EmpComp, SignUp, ChildComp, ParentComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vijayhcl');
}
