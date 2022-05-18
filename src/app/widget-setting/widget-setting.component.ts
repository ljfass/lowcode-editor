import {
  Component,
  ComponentRef,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";

@Component({
  selector: "app-widget-setting",
  templateUrl: "./widget-setting.component.html",
  styleUrls: ["./widget-setting.component.less"],
})
export class WidgetSettingComponent implements OnChanges {
  @Input() ref!: ComponentRef<WidgetComponent>;

  tabSelectedIndex = 0;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.ref.firstChange) {
      this.tabSelectedIndex = 0;
    }
  }

  onTabSelectedIndexChange(index: number) {
    this.tabSelectedIndex = index;
  }
}
