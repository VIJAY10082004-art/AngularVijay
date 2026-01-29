import { Component ,inject} from '@angular/core';
import { Emp } from '../../service/emp';

@Component({
  selector: 'app-emp-comp',
  imports: [],
  templateUrl: './emp-comp.html',
  styleUrl: './emp-comp.css',
})
export class EmpComp {
emp=inject(Emp)
}
