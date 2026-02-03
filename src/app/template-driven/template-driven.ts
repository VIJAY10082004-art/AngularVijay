import { CountryList } from './../../countryList/country-list';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe, NgClass } from '@angular/common';
@Component({
  selector: 'app-template-driven',
  imports: [FormsModule, NgClass,JsonPipe],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.css',
})
export class TemplateDriven  {
Name:string="";
Password:string="";
country:string=""
gender:string=""
countryList=['India','USA','Pakistan']
// countires=inject(CountryList)
// countryData=signal<any>([]);
// getCountry(){
//   this.countires.getData().subscribe({

// next:(data)=>{
//   console.log(data)
//   this.countryData.set(data)
// }

//   })
  

// }
// ngOnInit(): void {
//     this.getCountry()
// }

hobbies:string[]=[];
skill: any;
handleSubmit(data:NgForm){

  // console.log(data.value);
  console.dir(data)
  
}
handleChange(event:Event){
  let cb=event.target as HTMLInputElement
  let val=cb.value;
  if(cb.checked){
    this.hobbies.push(val)
  }
  else{
    this.hobbies=this.hobbies.filter((a)=>{
      return a!==val})
  }

}

}
