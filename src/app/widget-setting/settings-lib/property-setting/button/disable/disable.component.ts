import { Component, ComponentRef, Input } from '@angular/core';
import { WidgetComponent } from 'src/app/widget-lib/widget/widget.component';

@Component({
  selector: 'app-disable',
  templateUrl: './disable.component.html',
  styleUrls: ['./disable.component.less'],
})
export class DisableComponent {
  @Input() ref!: ComponentRef<WidgetComponent>;

  onSelectChange(val: boolean) {
    this.ref.instance.widgetData.setting.attribute.disabled = val;
  }
}
