import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table.component";
import { ColumnSettingItemComponent } from "./components/columns-setting-item/columns-setting-item.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "src/app/share/ng-zorro-antd.module";
import { CollapsePaneComponent } from "./components/collapse-pane/collapse-pane.component";
import { SortableColumnsListComponent } from "./components/sortable-columns-list/sortable-columns-list.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ColumnEditService } from "./providers/column-edit.service";
import { ClickOutsideDirective } from "src/app/directives/click-outside/click-outside.directive";
import { SortableColumnItemEditContentComponent } from "./components/sortable-column-item-edit-content/sortable-column-item-edit-content.component";

@NgModule({
  declarations: [
    TableComponent,
    ColumnSettingItemComponent,
    CollapsePaneComponent,
    SortableColumnsListComponent,
    SortableColumnItemEditContentComponent,
    ClickOutsideDirective,
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ColumnEditService],
})
export class TableModule {}
