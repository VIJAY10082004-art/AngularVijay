import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
 
  bgcolor:string='red'
  ele=inject(ElementRef);
  @HostListener('mouseenter')
    onMouseEnter(){
      this.ele.nativeElement.style.background=this.bgcolor;
    }
  @HostListener('mouseleave')
    onMouseLeave(){
      this.ele.nativeElement.style.background=''//give transparent or empty string
    }
  }
  

  

