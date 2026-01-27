import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComp } from './first-comp/first-comp';
import { Child } from "./child/child";
import { PraticeComp } from "./pratice-comp/pratice-comp";
import { ServiceComp } from "./service-comp/service-comp";
import { GitComp } from './git-comp/git-comp';
import { RComp } from "./r-comp/r-comp";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComp, Child, PraticeComp, ServiceComp, GitComp, RComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vijayhcl');
}
