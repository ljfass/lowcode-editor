import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkspaceComponent } from "./workspace.component";
import { WorkspaceRoutingModule } from "./workspace-routing.module";
import { PanelComponent } from "./panel/panel.component";
import { ShareModule } from "../share/share.module";
import { MonacoEditorModule } from "ngx-monaco-editor";
import { FormsModule } from "@angular/forms";
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [WorkspaceComponent, PanelComponent, PreviewComponent],
  imports: [
    CommonModule,
    MonacoEditorModule.forRoot(),
    ShareModule,
    FormsModule,
    WorkspaceRoutingModule,
  ],
})
export class WorkspaceModule {}
