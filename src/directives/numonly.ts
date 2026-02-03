import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appNumonly]',
})
export class Numonly {

  ele=inject(ElementRef)
  @HostListener('input')//to get input we use event
  handleInput(){
    let input=this.ele.nativeElement as HTMLInputElement
   input.value= input.value.replace(/[^0-9]/g,'')

  }

}
