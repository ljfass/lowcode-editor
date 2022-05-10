import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { CollapsePaneExpandMode } from "../../enum";
import { CollapsePaneExpandeType } from "../../type";

@Component({
  selector: "app-widget-setting-collapse-pane",
  templateUrl: "./collapse-pane.component.html",
  styleUrls: ["./collapse-pane.component.less"],
})
export class CollapsePaneComponent implements OnInit, OnChanges {
  @Input()
  @Input()
  panel!: CollapsePaneExpandeType;
  @Output() onActiveChange = new EventEmitter<boolean>();
  @Output() onJump = new EventEmitter<null>();

  constructor() {}

  _panel!: CollapsePaneExpandeType;

  get panelMode(): CollapsePaneExpandMode {
    return this._panel.mode!;
  }

  get panelActive(): boolean {
    return this._panel.active!;
  }

  ngOnInit(): void {}

  /**
   *
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.panel.firstChange && changes.panel.currentValue) {
      const value = changes.panel.currentValue;
      this._panel = {
        name: value.name ?? "",
        active: value?.active ?? true,
        disabled: value?.disabled ?? false,
        mode: value?.mode ?? CollapsePaneExpandMode.Default,
      };
    }
  }

  handlePanelCollapse(val: boolean) {
    this.onActiveChange.emit(val);
    this._panel.active = val;
  }

  handlePaneJump(e: MouseEvent) {
    e.preventDefault();
    this.onJump.emit();
  }
}
