import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
  Input,
} from "@angular/core";
import { DragEventType } from "src/app/enum";

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
  @Output() onDragEnter = new EventEmitter<DragEvent>();
  constructor(private elementRef: ElementRef) {}

  listenDrag(e: DragEvent, type: DragEventType) {
    e.preventDefault();
    if (type === DragEventType.Enter || type === DragEventType.Over) {
      this.elementRef.nativeElement.classList.add(this.clssName);
      if (type === DragEventType.Enter) this.onDragEnter.emit(e);
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
