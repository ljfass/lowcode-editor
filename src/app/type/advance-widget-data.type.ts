import { WidgetMode } from "../enum";
import { WidgetEvent } from "./widget-event-type";

/**
 * 数据列
 * 数据源
 * 操作列
 * 顶部操作
 * 风格和样式
 */
export type AdvancedWidgetData<T> = {
  id?: number;
  attribute: T;
  events?: WidgetEvent[];
  mode?: WidgetMode;
};
