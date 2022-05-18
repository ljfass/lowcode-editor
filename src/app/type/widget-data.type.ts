import { WidgetMode } from "../enum";
import { ApperanceSetting } from "./apperance-setting.type";
import { WidgetEvent } from "./widget-event-type";

export type WidgetData<T> = {
  id?: number;
  name?: string;
  setting: {
    attribute: T;
    style: ApperanceSetting;
  };
  mode?: WidgetMode;
  events?: WidgetEvent[];
};
