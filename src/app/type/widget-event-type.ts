import { EventType } from "../enum";

export type WidgetEvent = {
  actionId: string;
  actionName: string;
  actionType: EventType;
  defaultFuncName: string;
  funs: EventContent[];
};

export type EventContent = {
  widgetId: number | string;
  funcName: string;
  funcParams?: { [key: string]: any };
  funcBody: string;
};
