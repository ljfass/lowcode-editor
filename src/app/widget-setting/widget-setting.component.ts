import { Component, ComponentRef, Input, OnInit } from '@angular/core';
import { NavButton } from '../type/nav-button.type';
import { WidgetComponent } from 'src/app/widget-lib/widget/widget.component';

@Component({
  selector: 'app-widget-setting',
  templateUrl: './widget-setting.component.html',
  styleUrls: ['./widget-setting.component.less'],
})
export class WidgetSettingComponent implements OnInit {
  @Input() ref!: ComponentRef<WidgetComponent>;
  navItems: NavButton[] = [
    {
      type: 'widget-settings',
      name: '属性',
      isActive: true,
    },
    {
      type: 'widget-styles',
      name: '样式',
      isActive: false,
    },
    {
      type: 'widget-events',
      name: '事件',
      isActive: false,
    },
  ];

  navType = 'widget-settings';
  widgetType!: string;
  constructor() {}

  ngOnInit(): void {
    this.widgetType = this.ref.instance.widget.type;
  }

  onNavItemClick(item: NavButton) {}
}
