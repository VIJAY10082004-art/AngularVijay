import { Directive,ElementRef,HostListener,inject } from '@angular/core'

@Directive({
  selector: '[appVjTask]',
})
export class VjTask {

font:string="50px";
ele=inject(ElementRef)
@HostListener('mouseenter')
 onMouseEnter(){
  this.ele.nativeElement.style.fontSize=this.font;
 }
 @HostListener('mouseleave')
 onMouseLevae(){
  this.ele.nativeElement.style.fontSize='';
 }

}
