import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpData {
   http=inject(HttpClient)
//return is obersvable
getData(){
 return this.http.get('https://api.github.com/users')

}
  
}
