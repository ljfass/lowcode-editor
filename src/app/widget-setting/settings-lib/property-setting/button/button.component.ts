import { Component, ComponentRef } from "@angular/core";
import { NzButtonShape } from "ng-zorro-antd/button";
import { ButtonType } from "src/app/enum";
import { WidgetData } from "src/app/type";
import { WidgetButtonComponent } from "src/app/widget-lib/widget/basic/widget-button/widget-button.component";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.less"],
})
export class ButtonComponent {
  constructor(public ref: ComponentRef<WidgetComponent>) {}

  get attribute() {
    return (
      this.ref.instance.contentComponentRef!.instance
        .widgetData as WidgetData<any>
    ).setting.attribute;
  }

  onInputChange(val: string) {
    this.attribute.buttonText = val;
  }

  onSizeChange(size: string) {
    this.attribute.size = size;
    (
      this.ref.instance.contentComponentRef?.instance as WidgetButtonComponent
    ).refreshButtonWidgetWidth(size);
  }

  onTypeChange(type: ButtonType) {
    this.attribute.type = type;
  }

  onShapeChange(shape: NzButtonShape) {
    this.attribute.shape = shape;
  }

  onGhostChange(val: boolean) {
    this.attribute.ghost = val;
  }

  onDisableChange(val: boolean) {
    this.attribute.disabled = val;
  }

  onLoadingChange(val: boolean) {
    this.attribute.loading = val;
  }
}
