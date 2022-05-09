import { Component, ComponentRef } from "@angular/core";
import { WidgetData } from "src/app/type";
import { nzInputNumberFormatter, nzInputNumberParser } from "src/app/utils";
import { WidgetComponent } from "../../../../widget-lib/widget/widget.component";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.less"],
})
export class LayoutComponent {
  constructor(public ref: ComponentRef<WidgetComponent>) {}

  get style() {
    return this.ref.instance.contentComponentRef!.instance.widgetData.setting
      .style;
  }

  onWidgetHeight(val: number) {
    (
      this.ref.instance.contentComponentRef!.instance
        .widgetData as WidgetData<any>
    ).setting.style.layout.height = val;
  }
  onWidgetWidth(val: number) {
    (
      this.ref.instance.contentComponentRef!.instance
        .widgetData as WidgetData<any>
    ).setting.style.layout.width = val;
  }

  formatterPixel = nzInputNumberFormatter("px");
  parserPixel = nzInputNumberParser("px");
}
