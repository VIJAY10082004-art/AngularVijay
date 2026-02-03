import { Component } from '@angular/core';
import { VjTask } from '../../directives/vj-task';


@Component({
  selector: 'app-task-custom',
  imports: [VjTask],
  templateUrl: './task-custom.html',
  styleUrl: './task-custom.css',
})
export class TaskCustomComponent {

}
