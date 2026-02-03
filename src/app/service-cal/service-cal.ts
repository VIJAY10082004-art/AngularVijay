import { Component, inject } from '@angular/core';
import { RxCounter } from '../../service/rx-counter';
import { AsyncPipe } from '@angular/common'; 
@Component({
  selector: 'app-service-cal',
  imports: [AsyncPipe],
  templateUrl: './service-cal.html',
  styleUrl: './service-cal.css',
})
export class ServiceCal {
  RxCounter=inject(RxCounter)
  count$=this.RxCounter.count$//dummy variable
  increase(){
    this.RxCounter.increaseCount()
  }
  decrease(){
    this.RxCounter.decreaseCount()
  }

}
