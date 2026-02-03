
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe, NgClass } from '@angular/common';
@Component({
  selector: 'app-register-comp',
  imports: [FormsModule,NgClass,JsonPipe],
  templateUrl: './register-comp.html',
  styleUrl: './register-comp.css',
})
export class RegisterComp {
  branchesList = ["ece",'eee','cse']
  skills:string[]=[];
  obj={
    name:"",
    email:"",
    phoneno:"",
    branch:'',
    gender:''
  }
  handleChange(event:Event){
  let cb=event.target as HTMLInputElement
  let val=cb.value;
  if(cb.checked){
    this.skills.push(val)
  }
  else{
    this.skills=this.skills.filter((a)=>{
      return a!==val})
  }

}
handleSubmit(data:any){
  console.log(data.value)
}

}
