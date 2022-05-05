import { Component, ComponentRef } from '@angular/core';
import { WidgetComponent } from 'src/app/widget-lib/widget/widget.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export class ButtonComponent {
  constructor(public ref: ComponentRef<WidgetComponent>) {}
}
