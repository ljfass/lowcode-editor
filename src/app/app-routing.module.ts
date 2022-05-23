import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PreviewComponent } from "./workspace/preview/preview.component";
import { WorkspaceModule } from "./workspace/workspace.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "workspace",
    pathMatch: "full",
  },
  {
    path: "workspace",
    loadChildren: () =>
      import("./workspace/workspace.module").then((m) => WorkspaceModule),
  },
  {
    path: "preview",
    component: PreviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
