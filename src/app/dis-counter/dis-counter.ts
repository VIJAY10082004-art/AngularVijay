import { Counter } from './../../service/counter';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-dis-counter',
  imports: [],
  templateUrl: './dis-counter.html',
  styleUrl: './dis-counter.css',
})
export class DisCounter {
Counter=inject(Counter);

}
