import { WidgetMode } from "../enum";
import { WidgetEvent } from "./widget-event-type";

export type AdvancedWidgetData<T> = {
  id?: number;
  attribute: T;
  events?: WidgetEvent[];
  mode?: WidgetMode;
};
