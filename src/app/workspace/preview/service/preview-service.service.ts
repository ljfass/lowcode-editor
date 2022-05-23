import { Injectable } from "@angular/core";
import { WidgetData } from "src/app/type";
import { AdvancedWidgetData } from "src/app/type/advance-widget-data.type";

@Injectable({
  providedIn: "root",
})
export class PreviewServiceService {
  widgets: Array<{
    type: string;
    data: WidgetData<any> | AdvancedWidgetData<any>;
  }> = [];
  constructor() {}
}
