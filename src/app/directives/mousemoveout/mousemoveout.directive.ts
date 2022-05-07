import { Directive, Output, EventEmitter } from "@angular/core";

export type TYPE = "enter" | "out" | string;

@Directive({
  selector: "[appMouseMoveOut]",
  host: {
    "(mouseenter)": "listenMouse('enter')",
    "(mouseleave)": "listenMouse('out')",
  },
})
export class MousemoveoutDirective {
  @Output() emitMouseType: EventEmitter<TYPE> = new EventEmitter<TYPE>();

  constructor() {}

  listenMouse(type: TYPE): void {
    this.emitMouseType.emit(type);
  }
}
