import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-parent-comp',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './parent-comp.html',
  styleUrl: './parent-comp.css',
})
export class ParentComp {

}
