import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  count=1;
  inc(){
    this.count++;
  }
  dec(){
    this.count--;
  }

}
