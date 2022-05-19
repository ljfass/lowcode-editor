import { Component, OnInit } from "@angular/core";
import { Position } from "src/app/enum";
import { PaginationAttribute, WidgetData } from "src/app/type";
import { BasicBaseWidgetContent } from "../base-widget-content";
export type PaginationWidgetData = WidgetData<PaginationAttribute>;

@Component({
  selector: "app-widget-pagination",
  templateUrl: "./widget-pagination.component.html",
  styleUrls: ["./widget-pagination.component.less"],
})
export class WidgetPaginationComponent
  extends BasicBaseWidgetContent
  implements OnInit
{
  widgetData: PaginationWidgetData = {
    name: "分页器",
    setting: {
      attribute: {
        total: 40,
        pageSize: 10,
        pageIndex: 1,
        disabled: false,
        showQuickJumper: false,
        showSizeChanger: false,
        size: "default",
        pageSizeOptions: [10, 20, 30, 40],
        hideOnSinglePage: false,
      },
      style: {
        layout: {
          width: "auto",
          height: 28,
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
    events: [],
  };
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
