import { Component, ComponentRef } from "@angular/core";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.less"],
})
export class DatePickerComponent {
  constructor(public ref: ComponentRef<WidgetComponent>) {}

  get attribute() {
    return this.ref.instance.contentComponentRef!.instance.widgetData.setting
      .attribute;
  }

  // 占位提示修改
  onPlaceholderChange(val: string) {
    this.ref.instance.contentComponentRef!.instance.widgetData.setting.attribute.placeholder =
      val;
  }

  // 默认值修改
  onDefaultValueChange(date: Date) {
    this.ref.instance.contentComponentRef!.instance.widgetData.setting.attribute.default =
      Date.parse(date.toString());
  }
  // 格式修改
  onFormatChange(val: string) {
    this.ref.instance.contentComponentRef!.instance.widgetData.setting.attribute.farmat =
      val;
  }

  // 格式修改
  onSizeChange(val: string) {
    this.ref.instance.contentComponentRef!.instance.widgetData.setting.attribute.size =
      val;
  }

  // 是否禁用
  onDisableChange(val: boolean) {
    this.ref.instance.contentComponentRef!.instance.widgetData.setting.attribute.disabled =
      val;
  }

  // 是否显示清除按钮
  onAllowClearChange(val: boolean) {
    this.ref.instance.contentComponentRef!.instance.widgetData.setting.attribute.allowClear =
      val;
  }
}
