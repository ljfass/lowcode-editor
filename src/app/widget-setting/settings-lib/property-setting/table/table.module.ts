import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table.component";
import { ColumnSettingItemComponent } from "./components/columns-setting-item/columns-setting-item.component";
import { FormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "src/app/share/ng-zorro-antd.module";
import { NzIconModule } from "ng-zorro-antd/icon";
import {
  DeleteOutline,
  DeleteFill,
  DragOutline,
} from "@ant-design/icons-angular/icons";
import { IconDefinition } from "@ant-design/icons-angular";
const icons: IconDefinition[] = [DeleteOutline, DragOutline, DeleteFill];

@NgModule({
  declarations: [TableComponent, ColumnSettingItemComponent],
  imports: [CommonModule, NgZorroAntdModule, FormsModule, NzIconModule],
})
export class TableModule {}
