import { PageStyle } from './page-style.type';
import { WidgetData } from './widget-data.type';

export type Page = {
  id: string;
  name: string;
  style: PageStyle;
  widgets?: {
    type: string;
    widgetData: WidgetData<any>;
  }[];
  selected?: boolean;
};
