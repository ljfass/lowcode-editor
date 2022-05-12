import { Component, Input, EventEmitter, OnInit, Output } from "@angular/core";
import { CollapseColumnListType } from "../../type";

@Component({
  selector: "app-sortable-columns-list-item",
  templateUrl: "./columns-setting-item.component.html",
  styleUrls: ["./columns-setting-item.component.less"],
})
export class ColumnSettingItemComponent implements OnInit {
  @Input() data!: CollapseColumnListType;
  @Output() public onEdit = new EventEmitter<MouseEvent>();
  @Output() public onDelete = new EventEmitter<string | number>();

  get title(): string {
    return this.data?.title ?? "";
  }
  get name(): string {
    return this.data?.name ?? "";
  }

  constructor() {}

  ngOnInit(): void {}
}
