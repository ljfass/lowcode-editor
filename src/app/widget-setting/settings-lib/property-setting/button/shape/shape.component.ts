import { Component, ComponentRef, Input } from '@angular/core';
import { NzButtonShape } from 'ng-zorro-antd/button';
import { WidgetComponent } from 'src/app/widget-lib/widget/widget.component';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.less'],
})
export class ShapeComponent {
  @Input() ref!: ComponentRef<WidgetComponent>;

  onSelectChange(shape: NzButtonShape) {
    this.ref.instance.widgetData.setting.attribute.shape = shape;
  }
}
