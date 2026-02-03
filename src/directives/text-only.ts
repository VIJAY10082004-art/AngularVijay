import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appTextOnly]',
})
export class TextOnly {

  private el = inject(ElementRef);

  @HostListener('input', ['$event'])
  handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
  }
}
