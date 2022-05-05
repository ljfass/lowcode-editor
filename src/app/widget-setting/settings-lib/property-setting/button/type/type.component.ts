import { Component, ComponentRef, Input } from '@angular/core';
import {
  ButtonSize,
  ButtonType,
} from 'src/app/enum/widget-button/attribute.enum';
import { WidgetComponent } from 'src/app/widget-lib/widget/widget.component';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.less'],
})
export class TypeComponent {
  @Input() ref!: ComponentRef<WidgetComponent>;

  onSelectChange(type: ButtonType) {
    this.ref.instance.widgetData.setting.attribute.type = type;
  }
}
