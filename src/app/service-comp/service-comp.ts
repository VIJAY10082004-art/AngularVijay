import { FormsModule } from '@angular/forms';
import { UserData } from '../../service/user-data';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-service-comp',
  imports: [FormsModule],
  templateUrl: './service-comp.html',
  styleUrl: './service-comp.css',
})
export class ServiceComp {
  // abc=signal("hi chellam")
UserData=inject(UserData)
name:string="";
img:string="";
handleClick(){
  this.UserData.user.push({name:this.name,img:this.img});
  
}

}
