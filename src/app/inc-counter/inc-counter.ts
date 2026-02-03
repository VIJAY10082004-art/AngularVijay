
import { Component, inject } from '@angular/core';
import { Counter } from '../../service/counter';


@Component({
  selector: 'app-inc-counter',
  imports: [],
  templateUrl: './inc-counter.html',
  styleUrl: './inc-counter.css',
})
export class IncCounter {
Counter=inject(Counter)
click(data:any){
  if(data=='inc'){
    this.Counter.inc();

  }
  else{
this.Counter.dec();
  }
}

}
