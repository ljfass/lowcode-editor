import { Component, ComponentRef, OnInit } from "@angular/core";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";
import { PropertySettingBase } from "../property-setting-base";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.less"],
})
export class PaginationComponent extends PropertySettingBase implements OnInit {
  sizeOptionsValue = "";
  constructor(public ref: ComponentRef<WidgetComponent>) {
    super(ref);
  }

  ngOnInit(): void {
    console.log(this.attribute);
    this.sizeOptionsValue = this.attribute.pageSizeOptions.join(",");
  }

  onPageSizeOptionsChange(val: string) {
    this.attribute.pageSizeOptions = val.split(",").map((item) => Number(item));
  }
}
