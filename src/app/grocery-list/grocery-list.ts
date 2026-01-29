import { Component, inject } from '@angular/core';
import { GroceryService } from '../../service/grocery-service';

@Component({
  selector: 'app-grocery-list',
  imports: [],
  templateUrl: './grocery-list.html',
  styleUrl: './grocery-list.css',
})
export class GroceryList {
  gro = inject(GroceryService);//service class name




}
