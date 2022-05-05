import { Component, ComponentRef } from '@angular/core';
import { WidgetData } from 'src/app/type/widget-data.type';
import {
  nzInputNumberFormatter,
  nzInputNumberParser,
} from 'src/app/utils/nz-input-number-formatter';
import { WidgetComponent } from '../../../../widget-lib/widget/widget.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
})
export class LayoutComponent {
  constructor(public ref: ComponentRef<WidgetComponent>) {}
  widgetData!: WidgetData<any>;

  onWidgetHeight(val: number) {
    (
      this.ref.instance.widgetData as WidgetData<any>
    ).setting.style.layout.height = val;
  }
  onWidgetWidth(val: number) {
    (
      this.ref.instance.widgetData as WidgetData<any>
    ).setting.style.layout.width = val;
  }

  formatterPixel = nzInputNumberFormatter('px');
  parserPixel = nzInputNumberParser('px');
}
