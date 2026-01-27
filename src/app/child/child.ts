import { Component } from '@angular/core';
import { C1 } from "./c1/c1";
import { C2 } from "./c2/c2";

@Component({
  selector: 'app-child',
  imports: [C1, C2],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

}
