import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
  Input,
} from "@angular/core";
export type DragTypea = {
  Enter: "enter";
  Leave: "leave";
  Over: "over";
};

@Directive({
  selector: "[appDraggableDetectArea]",
  host: {
    "(dragenter)": "listenDrag($event,'enter')",
    "(dragleave)": "listenDrag($event,'leave')",
    "(dragover)": "listenDrag($event,'over')",
    "(drop)": "listenDrop($event)",
  },
})
export class DraggableDetectAreaDirective {
  @Input() clssName?: string;
  @Output() onDragDrop = new EventEmitter<DragEvent>();
  constructor(private elementRef: ElementRef) {}

  listentDrag(e: DragEvent, type: DragTypea) {
    e.preventDefault();
  }

  listenDrag(e: DragEvent, type: string) {
    if (type === "enter" || type === "over") {
      this.elementRef.nativeElement.classList.add(this.clssName);
    } else {
      this.elementRef.nativeElement.classList.remove(this.clssName);
    }
  }

  listenDrop(e: DragEvent) {
    e.stopPropagation();
    this.elementRef.nativeElement.classList.remove(this.clssName);
    this.onDragDrop.emit(e);
  }
}
