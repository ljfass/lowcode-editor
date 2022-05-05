import { ApperanceSetting } from './apperance-setting.type';

export type WidgetData<T> = {
  id?: number;
  name?: string;
  setting: {
    attribute: T;
    style: ApperanceSetting;
  };
};
