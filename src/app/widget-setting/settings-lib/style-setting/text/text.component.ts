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

  get style() {
    return (
      this.ref.instance.contentComponentRef!.instance
        .widgetData as WidgetData<any>
    ).setting.style;
  }

  constructor(public ref: ComponentRef<WidgetComponent>) {
    if (ref) {
      this.fontWeight = this.style.background.opacity * 100;
    }
  }
  fontSizeOptions = buttonWiddgetFontSzieOptions;

  onWidgetFontSizeChange(val: number) {
    this.style.text.fontSize = val;
  }

  onWidgetFontWeightChange(val: number) {
    this.style.text.fontWeight = val;
  }

  onWidgetLineHeightChange(val: number) {
    this.style.text.lineHeight = val;
  }

  onWidgetBgOpacityChange(val: number) {
    this.style.background.opacity = val / 100;
  }

  onColorPickerChange(color: string) {
    this.style.text.color = color;
  }

  formatterPixel = nzInputNumberFormatter("px");
  parserPixel = nzInputNumberParser("px");
}
