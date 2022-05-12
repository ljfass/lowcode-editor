import { Component, ComponentRef } from "@angular/core";
import { textWiddgetFontSzieOptions } from "src/app/const";
import { WidgetData } from "src/app/type";
import { WidgetTextComponent } from "src/app/widget-lib/widget/basic/widget-text/widget-text.component";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";

@Component({
  selector: "app-text",
  templateUrl: "./text.component.html",
  styleUrls: ["./text.component.less"],
})
export class TextComponent {
  constructor(public ref: ComponentRef<WidgetComponent>) {}
  fontOptions = textWiddgetFontSzieOptions;

  get attribute() {
    return (
      this.ref.instance.contentComponentRef!.instance
        .widgetData as WidgetData<any>
    ).setting.attribute;
  }
  onFontSelectChange(font: string) {
    this.attribute.size = font;
  }

  onShowMarkChange(val: boolean) {
    (
      this.ref.instance.contentComponentRef?.instance as WidgetTextComponent
    ).handleMarkChange(val);
  }

  onShowDeleteChange(val: boolean) {
    (
      this.ref.instance.contentComponentRef?.instance as WidgetTextComponent
    ).handleDeleteChange(val);
  }

  onShowStrongChange(val: boolean) {
    (
      this.ref.instance.contentComponentRef?.instance as WidgetTextComponent
    ).handleStrongChange(val);
  }

  onShowUnderlineChange(val: boolean) {}

  // 文本内容
  onTextAreaChange(value: string) {
    const shouldTrim = (
      this.ref.instance.contentComponentRef!.instance
        .widgetData as WidgetData<any>
    ).setting.attribute.trim;
    this.attribute.text = !shouldTrim ? value : value.trim();
  }

  // 占位提示
  onPlaceholderChange(val: string) {
    this.attribute.placeholder = val;
  }

  // 尺寸
  onSizeChange(size: string) {
    this.attribute.size = size;
  }

  // 禁用
  onDisableChange(val: boolean) {
    this.attribute.disabled = val;
  }

  // 多行文本高度
  onTextRowsChange(val: number) {
    this.attribute.rows = val;
  }

  // 自动去除头尾空字符
  onTextTrimChange(val: boolean) {
    this.attribute.trim = val;
  }

  // 文本框类型
  onInputTypeChange(val: string) {
    this.attribute.inputType = val;
  }
}
