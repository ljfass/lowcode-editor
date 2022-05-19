import { Component, OnInit, Renderer2 } from "@angular/core";
import { WidgetCard } from "src/app/type";
import { WidgetLibService } from "./widget-lib.service";

@Component({
  selector: "app-widget-lib",
  templateUrl: "./widget-lib.component.html",
  styleUrls: ["./widget-lib.component.less"],
})
export class WidgetLibComponent implements OnInit {
  widgetList: WidgetCard[] = [];

  constructor(
    private WidgetLibService: WidgetLibService,
    private rendered2: Renderer2
  ) {
    this.widgetList = this.WidgetLibService.getWidgetLib();
  }

  ngOnInit(): void {}

  onWidgetDragStart(event: DragEvent, widget: WidgetCard): void {
    event.dataTransfer?.setData("widgetType", widget.type);
  }

  onWidgetDragEnd(event: DragEvent): void {}
}
