import { Component, ComponentRef, Input } from '@angular/core';
import { WidgetComponent } from 'src/app/widget-lib/widget/widget.component';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less'],
})
export class LoadingComponent {
  @Input() ref!: ComponentRef<WidgetComponent>;

  onSelectChange(val: boolean) {
    this.ref.instance.widgetData.setting.attribute.loading = val;
  }
}
