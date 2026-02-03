import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule,NgClass],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  UserName:string="";
  Email:string="";
  PasswordEnter:string="";
Name: string="";

PhoneNo:string=""
ConfirmPasswordEnter: any;


handleSubmit(data:any){
console.dir(data)
}
}
