import { ApperanceSetting } from "./apperance-setting.type";

export type WidgetData<T> = {
  id?: number;
  name?: string;
  setting: {
    type: string;
    attribute: T;
    style: ApperanceSetting;
  };
};
