export type WidgetCard = {
  name: string;
  type: string;
  width?: number;
  height?: number;
  icon?: string;
  component: any;
  settingComponent: any;
  eventComponent?: any;
};
