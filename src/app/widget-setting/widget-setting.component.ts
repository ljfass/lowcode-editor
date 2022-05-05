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

  selectedIndex = 0;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedIndex = 0;
  }

  onSelectedIndexChange(index: number) {
    this.selectedIndex = index;
  }
}
