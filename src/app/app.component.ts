import { Component } from '@angular/core';
const enum WidgetCategory {
  UnCategorized = 'uncategoried',
  Basic = 'basic',
  Advanced = 'advanced',
}

type NavButton = {
  type: string;
  name: string;
  icon?: string | null;
  isActive?: boolean;
  isHidden?: boolean;
  component?: any;
  data?: any;
};

type Widget = {
  /** 组件类别 */
  category: WidgetCategory | string;
  /** 显示名称 */
  name: string;
  /** 部件类型 */
  type: string;
  /** 部件初始宽度 */
  width?: number;
  /** 部件初始高度 */
  height?: number;
  /** 工具栏显示图标 */
  icon?: string;
  /** 部件类 */
  /** 设置 */
  settings?: string[];
};

const BASE_WIDGET: Widget[] = [
  {
    category: WidgetCategory.Basic,
    type: 'text',
    name: '文字',
    icon: 'icon-text',
    width: 100,
    height: 100,
    settings: ['text'],
  },
  {
    category: WidgetCategory.Basic,
    type: 'image',
    name: '图片',
    icon: 'icon-image',
    width: 100,
    height: 100,
    settings: ['image'],
  },
  {
    category: WidgetCategory.Basic,
    type: 'button',
    name: '按钮',
    icon: 'icon-mtbutton',
    width: 100,
    height: 30,
    settings: ['text', 'appearance'],
  },
  {
    category: WidgetCategory.Basic,
    type: 'link-area',
    name: '链接区域',
    icon: 'icon-area',
    width: 100,
    height: 100,
    settings: ['appearance'],
  },
];

const WIDGET_CATEGORY: Map<string, string> = new Map([
  [WidgetCategory.Basic, '基本'],
  [WidgetCategory.Advanced, '高级'],
  [WidgetCategory.UnCategorized, '未分类'],
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'editor';
  widgetMap: Map<string, Widget[]> = new Map();
  navItems: NavButton[] = [];
  constructor() {
    const arr = BASE_WIDGET;
    const navItems: NavButton[] = [];
    arr.forEach((item) => {
      if (!this.widgetMap.has(item.category)) {
        this.widgetMap.set(item.category, []);
        navItems.push({
          type: item.category,
          name: WIDGET_CATEGORY.get(item.category) || item.category,
          isActive: false,
        });
      }
      this.widgetMap.get(item.category)?.push(item);
    });
    this.navItems = navItems;
    console.log(this.widgetMap);

    console.log(this.navItems);
  }
}
