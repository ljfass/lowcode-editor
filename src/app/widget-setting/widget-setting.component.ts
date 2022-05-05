import { Component, ComponentRef, Input, OnInit } from "@angular/core";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";

@Component({
  selector: "app-widget-setting",
  templateUrl: "./widget-setting.component.html",
  styleUrls: ["./widget-setting.component.less"],
})
export class WidgetSettingComponent implements OnInit {
  @Input() ref!: ComponentRef<WidgetComponent>;

  navType = "widget-settings";
  widgetType!: string;
  constructor() {}

  ngOnInit(): void {
    this.widgetType = this.ref.instance.widget.type;
  }
}
