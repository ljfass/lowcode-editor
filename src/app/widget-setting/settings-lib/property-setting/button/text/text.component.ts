import { Component, ComponentRef, Input } from '@angular/core';
import { WidgetComponent } from 'src/app/widget-lib/widget/widget.component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.less'],
})
export class TextComponent {
  @Input() ref!: ComponentRef<WidgetComponent>;
  constructor() {}

  onInputChange(val: string) {
    this.ref.instance.widgetData.setting.attribute.buttonText = val;
  }
}
