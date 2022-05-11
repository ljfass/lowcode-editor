import {
  Directive,
  ElementRef,
  HostListener,
  EventEmitter,
  Output,
} from "@angular/core";

@Directive({
  selector: "[appClickOutside]",
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<boolean>();
  constructor(private elementRef: ElementRef) {}

  @HostListener("document:click", ["$event", "$event.target"])
  onClick(e: MouseEvent, targetElement: HTMLElement) {
    console.log(targetElement);

    if (!targetElement) {
      return;
    }
    const clickedInside = targetElement.contains(this.elementRef.nativeElement);
    console.log(clickedInside);

    this.clickOutside.emit(clickedInside);
  }
}
