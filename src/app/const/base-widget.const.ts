import { WidgetCard } from 'src/app/type/widget-card.type';
import { WidgetButtonComponent } from '../widget-lib/widget/widget-button/widget-button.component';
import { WidgetTextComponent } from '../widget-lib/widget/widget-text/widget-text.component';
export const WIDGET_LIST: WidgetCard[] = [
  {
    type: 'button',
    name: '按钮',
    component: WidgetButtonComponent,
  },
  {
    type: 'text',
    name: '文本',
    component: WidgetTextComponent,
  },
];
