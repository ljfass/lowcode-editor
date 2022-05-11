import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkspaceComponent } from "./workspace.component";
import { WorkspaceRoutingModule } from "./workspace-routing.module";
import { PanelComponent } from "./panel/panel.component";
import { ShareModule } from "../share/share.module";

@NgModule({
  declarations: [WorkspaceComponent, PanelComponent],
  imports: [CommonModule, ShareModule, WorkspaceRoutingModule],
})
export class WorkspaceModule {}
