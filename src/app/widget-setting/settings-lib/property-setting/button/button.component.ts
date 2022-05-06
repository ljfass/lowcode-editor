import { Component, ComponentRef } from "@angular/core";
import { NzButtonShape } from "ng-zorro-antd/button";
import { ButtonType } from "src/app/enum";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.less"],
})
export class ButtonComponent {
  constructor(public ref: ComponentRef<WidgetComponent>) {}

  onInputChange(val: string) {
    this.ref.instance.widgetData.setting.attribute.buttonText = val;
  }

  onSizeChange(size: string) {
    this.ref.instance.widgetData.setting.attribute.size = size;
  }

  onTypeChange(type: ButtonType) {
    this.ref.instance.widgetData.setting.attribute.type = type;
  }

  onShapeChange(shape: NzButtonShape) {
    this.ref.instance.widgetData.setting.attribute.shape = shape;
  }

  onGhostChange(val: boolean) {
    this.ref.instance.widgetData.setting.attribute.ghost = val;
  }

  onDisableChange(val: boolean) {
    this.ref.instance.widgetData.setting.attribute.disabled = val;
  }

  onLoadingChange(val: boolean) {
    this.ref.instance.widgetData.setting.attribute.loading = val;
  }
}
