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
    if (!targetElement) {
      return;
    }

    const clickedInside =
      this.elementRef.nativeElement.contains(targetElement) ||
      targetElement.classList.contains("ant-select-item-option-content");

    this.clickOutside.emit(clickedInside);
  }
}
