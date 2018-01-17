import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[escapeInput]'
})
export class escapeInput {

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  private element: HTMLElement;
  private KEY_ESCAPE: number = 27;

  constructor(private elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  @HostListener('keyup', ['$event']) onKeyDown(event) {
    if (event.keyCode == this.KEY_ESCAPE) {
      event.target.value = '';
      this.ngModelChange.emit(event.target.value);
    }
  }

}