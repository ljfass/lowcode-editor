import { Component, OnInit } from "@angular/core";
import { NzDatePickerSizeType } from "ng-zorro-antd/date-picker";
import { DatePickerSize, Position } from "src/app/enum";
import { WidgetData, DatePickerAttribute } from "src/app/type";
import { BasicBaseWidgetContent } from "../base-widget-content";

export type DatePickerWidgetData = WidgetData<DatePickerAttribute>;

@Component({
  selector: "app-widget-date-picker",
  templateUrl: "./widget-date-picker.component.html",
  styleUrls: ["./widget-date-picker.component.less"],
})
export class WidgetDatePickerComponent
  extends BasicBaseWidgetContent
  implements OnInit
{
  widgetData: DatePickerWidgetData = {
    name: "日期选择框",
    setting: {
      attribute: {
        placeholder: "请选择日期",
        default: Date.parse(new Date().toString()),
        size: DatePickerSize.Small,
        format: "yyyy/MM/dd",
      },
      style: {
        layout: {
          width: 56,
          height: 32,
        },
        background: {
          fill: true,
          opacity: 1,
        },
        text: {
          fontSize: 12,
          lineHeight: 12,
          fontWeight: 400,
        },
        pos: {
          position: Position.Static,
        },
        radius: 0,
        border: {
          fill: true,
          color: "blue",
          style: "solid",
          width: 1,
        },
      },
    },
  };
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
