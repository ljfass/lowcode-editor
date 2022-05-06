import { Component, ComponentRef } from "@angular/core";
import { textWiddgetFontSzieOptions } from "src/app/const";
import { WidgetTextComponent } from "src/app/widget-lib/widget/widget-text/widget-text.component";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";

@Component({
  selector: "app-text",
  templateUrl: "./text.component.html",
  styleUrls: ["./text.component.less"],
})
export class TextComponent {
  constructor(public ref: ComponentRef<WidgetComponent>) {}
  fontOptions = textWiddgetFontSzieOptions;
  onFontSelectChange(font: string) {
    this.ref.instance.widgetData.setting.attribute.size = font;
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

  onTextAreaChange(value: string) {
    this.ref.instance.widgetData.setting.attribute.text = value;
  }
}
