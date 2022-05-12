import { Component, ComponentRef } from "@angular/core";
import { WidgetData } from "src/app/type";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.less"],
})
export class DatePickerComponent {
  constructor(public ref: ComponentRef<WidgetComponent>) {}

  get attribute() {
    return (
      this.ref.instance.contentComponentRef!.instance
        .widgetData as WidgetData<any>
    ).setting.attribute;
  }

  // 占位提示修改
  onPlaceholderChange(val: string) {
    this.attribute.placeholder = val;
  }

  // 默认值修改
  onDefaultValueChange(date: Date) {
    this.attribute.default = Date.parse(date.toString());
  }
  // 格式修改
  onFormatChange(val: string) {
    this.attribute.farmat = val;
  }

  // 格式修改
  onSizeChange(val: string) {
    this.attribute.size = val;
  }

  // 是否禁用
  onDisableChange(val: boolean) {
    this.attribute.disabled = val;
  }

  // 是否显示清除按钮
  onAllowClearChange(val: boolean) {
    this.attribute.allowClear = val;
  }
}
