import { Component,inject, OnInit, signal } from '@angular/core';
import { HttpData } from '../../service/http-data';

@Component({
  selector: 'app-http-comp',
  imports: [],
  templateUrl: './http-comp.html',
  styleUrl: './http-comp.css',
})
export class HttpComp implements OnInit{
  ngOnInit(): void {
    this.getHttpData();
  }
  data=inject(HttpData);
  actualData=signal<any>([]);
  getHttpData(){
    this.data.getData().subscribe({
      next:(data)=>{console.log(data)
        this.actualData.set(data)
      }
    })

  }

}
