import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Git {
  http=inject(HttpClient)

getData(){
 return this.http.get('https://api.github.com/users')

}
}
