import { Component, ComponentRef, Input } from '@angular/core';
import { WidgetComponent } from 'src/app/widget-lib/widget/widget.component';
@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.less'],
})
export class GhostComponent {
  @Input() ref!: ComponentRef<WidgetComponent>;

  onSelectChange(val: boolean) {
    this.ref.instance.widgetData.setting.attribute.ghost = val;
  }
}
