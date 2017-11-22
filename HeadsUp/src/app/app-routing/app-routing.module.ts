import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../views/dashboard/dashboard.component'
import {FiresComponent} from "../views/fires/fires.component";
import {Viewer3DComponent} from "../views/viewer3d/viewer3d.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'fires',
    component: FiresComponent,
  },
  {
    path: 'viewer3d',
    component: Viewer3DComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
