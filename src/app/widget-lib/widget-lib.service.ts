import { Injectable } from '@angular/core';
import { WIDGET_LIST } from '../const/base-widget.const';
import { WidgetCard } from 'src/app/type/widget-card.type';

@Injectable({
  providedIn: 'root',
})
export class WidgetLibService {
  widgetLib = WIDGET_LIST;

  constructor() {}

  getWidgetLib(): WidgetCard[] {
    return this.widgetLib;
  }

  getWidgetByType(type: string): WidgetCard | null {
    return this.widgetLib.find((widget) => widget.type === type) || null;
  }
}
