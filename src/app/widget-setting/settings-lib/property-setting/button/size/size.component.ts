import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Input,
} from '@angular/core';
import { ButtonSize } from 'src/app/enum/widget-button/attribute.enum';
import { WidgetButtonComponent } from 'src/app/widget-lib/widget/widget-button/widget-button.component';
import { WidgetComponent } from 'src/app/widget-lib/widget/widget.component';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.less'],
})
export class SizeComponent {
  @Input() ref!: ComponentRef<WidgetComponent>;
  constructor(private cdf: ChangeDetectorRef) {}
  onSelectChange(size: ButtonSize) {
    this.ref.instance.widgetData.setting.attribute.size = size;
    this.cdf.detectChanges();
    (
      this.ref.instance.contentComponentRef?.instance as WidgetButtonComponent
    ).refreshButtonWidgetWidth();
  }
}
