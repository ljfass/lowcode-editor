import { Component, ComponentRef } from "@angular/core";
import { WidgetData } from "src/app/type/widget-data.type";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";

@Component({
  selector: "app-background",
  templateUrl: "./background.component.html",
  styleUrls: ["./background.component.less"],
})
export class BackgroundComponent {
  color!: string;
  constructor(public ref: ComponentRef<WidgetComponent>) {}

  onColorPickerChange(color: string) {
    (
      this.ref.instance.widgetData as WidgetData<any>
    ).setting.style.background.color = color;
  }
}
