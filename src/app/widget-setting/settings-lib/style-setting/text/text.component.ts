import { Component, ComponentRef } from "@angular/core";
import { buttonWiddgetFontSzieOptions } from "src/app/const";
import { WidgetData } from "src/app/type";
import { nzInputNumberFormatter, nzInputNumberParser } from "src/app/utils";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";

@Component({
  selector: "app-text",
  templateUrl: "./text.component.html",
  styleUrls: ["./text.component.less"],
})
export class TextComponent {
  fontWeight!: number;
  textColor!: string;

  get value(): any {
    return this.textColor;
  }

  set value(v: any) {
    this.textColor = v;
  }

  constructor(public ref: ComponentRef<WidgetComponent>) {
    if (ref) {
      this.fontWeight =
        ref.instance.widgetData.setting.style.background.opacity * 100;
    }
  }
  fontSizeOptions = buttonWiddgetFontSzieOptions;

  onWidgetFontSizeChange(val: number) {
    (
      this.ref.instance.widgetData as WidgetData<any>
    ).setting.style.text.fontSize = val;
  }

  onWidgetFontWeightChange(val: number) {
    (
      this.ref.instance.widgetData as WidgetData<any>
    ).setting.style.text.fontWeight = val;
  }

  onWidgetLineHeightChange(val: number) {
    (
      this.ref.instance.widgetData as WidgetData<any>
    ).setting.style.text.lineHeight = val;
  }

  onWidgetBgOpacityChange(val: number) {
    (
      this.ref.instance.widgetData as WidgetData<any>
    ).setting.style.background.opacity = val / 100;
  }

  onColorPickerChange(color: string) {
    (this.ref.instance.widgetData as WidgetData<any>).setting.style.text.color =
      color;
  }

  formatterPixel = nzInputNumberFormatter("px");
  parserPixel = nzInputNumberParser("px");
}
