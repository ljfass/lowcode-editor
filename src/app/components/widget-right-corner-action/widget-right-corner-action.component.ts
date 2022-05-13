import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-widget-right-corner-action",
  templateUrl: "./widget-right-corner-action.component.html",
  styleUrls: ["./widget-right-corner-action.component.less"],
})
export class WidgetRightCornerActionComponent {
  @Input() name!: string;
  @Output() onWidgetDelete = new EventEmitter<null>();
  @Output() onWidgetCopy = new EventEmitter<null>();
}
