import { Component, inject, OnInit, signal } from '@angular/core';
import { Git } from '../../git/git';

@Component({
  selector: 'app-git-comp',
  imports: [],
  templateUrl: './git-comp.html',
  styleUrl: './git-comp.css',
})
export class GitComp implements OnInit{
data=inject(Git)//injecting data
actualData=signal<any>([]);//signal to track incoming data
//defining our own method to fetch and access data
getData(){
  this.data.getData().subscribe({

next:(data)=>{
  console.log(data)
  this.actualData.set(data)
}

  })

}
ngOnInit(): void {
    this.getData()
}

}
