import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-columns-setting-item",
  templateUrl: "./columns-setting-item.component.html",
  styleUrls: ["./columns-setting-item.component.less"],
})
export class ColumnSettingItemComponent implements OnInit {
  @Input() title!: string;
  @Input() name!: string;

  constructor() {}

  ngOnInit(): void {}
}
