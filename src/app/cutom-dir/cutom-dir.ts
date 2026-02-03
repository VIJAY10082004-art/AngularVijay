import { Component } from '@angular/core';
import { Highlight } from "../../directives/highlight";
import { Task } from "../../directives/task";
import { Numonly } from "../../directives/numonly";
import { TextOnly } from '../../directives/text-only';

@Component({
  selector: 'app-cutom-dir',
  imports: [Highlight, Task, Numonly,TextOnly],
  templateUrl: './cutom-dir.html',
  styleUrl: './cutom-dir.css',
})
export class CutomDir {

}
