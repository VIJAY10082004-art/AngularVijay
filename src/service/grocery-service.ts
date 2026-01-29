import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  grocery=[{
    vegName:'Potato',
    price:100


  },{
    vegName:'Onion',
    price:150

  },{
    vegName:'Tomato',
    price:250

  }]
}
