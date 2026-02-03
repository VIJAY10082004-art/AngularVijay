import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicChild } from '../dynamic-child/dynamic-child';

@Component({
  selector: 'app-dynamic-parent',
  imports: [],
  templateUrl: './dynamic-parent.html',
  styleUrl: './dynamic-parent.css',
})
export class DynamicParent {
@ViewChild('container',{read:ViewContainerRef})
container!:ViewContainerRef
createComp(){
  this.container.createComponent(DynamicChild)
}
clearComp(){
  this.container.clear();
}
}
