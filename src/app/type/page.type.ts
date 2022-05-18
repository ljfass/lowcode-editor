import { AdvancedWidgetData } from "./advance-widget-data.type";
import { WidgetData } from "./widget-data.type";
import { EventContent } from "./widget-event-type";

export type Page = {
  id: string;
  widgets: Array<{
    type: string;
    data: WidgetData<any> | AdvancedWidgetData<any>;
  }>;
  name?: string;
  selected?: boolean;
  functions?: EventContent[];
};
