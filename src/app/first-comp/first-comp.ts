import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from "@angular/common";
@Component({
  selector: 'app-first-comp',
  imports: [FormsModule, NgClass],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
name:string="Pirajan"
isLogged:boolean=true;
nameStyle:string="color:yellow";
visibility:boolean=false;

clickChangeState(){
  this.visibility=!(this.visibility);
}
logState(){
this.isLogged=!(this.isLogged)
}
clickChangeName(name:string){
this.name=name
}
clickColorChange(data:string){
  if(data==="red")
  this.nameStyle="color:red"
else if(data==="green")
  this.nameStyle="color:green"
else if(data==="blue")
   this.nameStyle="color:blue"
}



}
