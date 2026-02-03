import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({
  selector: '[appTask]',
})
export class Task {

  
  font:string='30px'
  ele=inject(ElementRef);
  @HostListener('mouseenter')
    onMouseEnter(){
      this.ele.nativeElement.style.fontSize=this.font;
    }
  @HostListener('mouseleave')
    onMouseLeave(){
      this.ele.nativeElement.style.fontSize=''//give transparent or empty string
    }



}
