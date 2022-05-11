import { Component, OnInit } from "@angular/core";
import { AdvancedBaseWidgetContent } from "../base-wdiget-content";
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
// export type TableWidgetData = AdvancedWidgetData<TableAttribute>;
@Component({
  selector: "app-widget-table",
  templateUrl: "./widget-table.component.html",
  styleUrls: ["./widget-table.component.less"],
})
export class WidgetTableComponent
  extends AdvancedBaseWidgetContent
  implements OnInit
{
  widgetData = {
    attribute: {},
  };
  listOfData: Person[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
