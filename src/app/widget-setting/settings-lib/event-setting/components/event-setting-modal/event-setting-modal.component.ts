import { Component, Input, OnInit } from "@angular/core";
import { NzModalRef } from "ng-zorro-antd/modal";

@Component({
  selector: "app-event-setting-modal",
  templateUrl: "./event-setting-modal.component.html",
  styleUrls: ["./event-setting-modal.component.less"],
})
export class EventSettingModalComponent implements OnInit {
  @Input() title!: string;
  @Input() params!: { [key: string]: any };
  @Input() body!: string;
  editorParamsOptions = { theme: "vs-light", language: "json" };
  editorBodyOptions = { theme: "vs-light", language: "javascript" };
  code: string = "{}";

  constructor(private modal: NzModalRef) {}

  ngOnInit(): void {
    this.code = JSON.stringify(this.params);
  }

  handleChange(jsonString: string) {
    // this.params =;
    // this.body = jsonString;
  }

  confirm() {
    this.modal.destroy({
      title: this.title,
      params: JSON.parse(this.code),
      body: this.body,
    });
  }

  cancel() {
    this.modal.destroy(null);
  }
}
