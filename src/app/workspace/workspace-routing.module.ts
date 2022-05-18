import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkspaceComponent } from "./workspace.component";
import { PanelComponent } from "./panel/panel.component";
import { PreviewComponent } from "./preview/preview.component";

const routes: Routes = [
  {
    path: "",
    component: WorkspaceComponent,
    children: [
      {
        path: "",
        component: PanelComponent,
      },
    ],
  },
  {
    path: "preview",
    component: PreviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkspaceRoutingModule {}
