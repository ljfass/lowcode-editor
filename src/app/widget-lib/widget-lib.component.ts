import { Component, OnInit, Renderer2 } from "@angular/core";
import { FormControl } from "@angular/forms";
import { WidgetCard } from "src/app/type";
import { WidgetLibService } from "./widget-lib.service";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-widget-lib",
  templateUrl: "./widget-lib.component.html",
  styleUrls: ["./widget-lib.component.less"],
})
export class WidgetLibComponent implements OnInit {
  inputControl = new FormControl();
  widgetMap: Map<string, WidgetCard[]> = new Map();
  widgetList: WidgetCard[] = [];

  constructor(
    private WidgetLibService: WidgetLibService,
    private rendered2: Renderer2
  ) {
    this.widgetList = this.WidgetLibService.getWidgetLib();
    this.widgetMap.set("basic", []);
    this.widgetList.forEach((widget: WidgetCard) => {
      this.widgetMap.get("basic")?.push(widget);
    });
  }

  ngOnInit(): void {
    this.inputControl.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(500))
      .subscribe((value: string) => {
        this.widgetList = value
          ? this.widgetList.filter((widget) =>
              new RegExp(`^.${value}.*$`, "i").test(widget.name)
            )
          : this.widgetList;
      });
  }

  onWidgetDragStart(event: DragEvent, widget: WidgetCard): void {
    event.dataTransfer?.setData("widgetType", widget.type);
  }

  onWidgetDragEnd(event: DragEvent): void {}
}
