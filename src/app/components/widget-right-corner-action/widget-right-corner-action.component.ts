import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-widget-right-corner-action",
  templateUrl: "./widget-right-corner-action.component.html",
  styleUrls: ["./widget-right-corner-action.component.less"],
})
export class WidgetRightCornerActionComponent implements OnInit {
  @Input() name!: string;
  constructor() {}

  ngOnInit(): void {}

  tooltipOverlayStyle = {
    zIndex: 9999,
  };
}
