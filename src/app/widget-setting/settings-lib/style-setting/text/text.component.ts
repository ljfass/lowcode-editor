import { Component, ComponentRef } from '@angular/core';
import { buttonWiddgetFontSzieOptions } from 'src/app/const/font-size.const';
import { WidgetData } from 'src/app/type/widget-data.type';
import {
  nzInputNumberFormatter,
  nzInputNumberParser,
} from 'src/app/utils/nz-input-number-formatter';
import { WidgetComponent } from 'src/app/widget-lib/widget/widget.component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.less'],
})
export class TextComponent {
  fontWeight!: number;
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

  formatterPixel = nzInputNumberFormatter('px');
  parserPixel = nzInputNumberParser('px');
}
