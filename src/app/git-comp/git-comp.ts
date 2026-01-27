import { Component, inject, OnInit, signal } from '@angular/core';
import { Git } from '../../git/git';
import { NestedRou } from "../nested-rou/nested-rou";
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-git-comp',
  imports: [NestedRou, RouterOutlet, RouterLinkWithHref,RouterModule],
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
