import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModsHomeComponent } from './mods-home/mods-home.component';


const routes: Routes = [
  {
    path: 'mods', component: ModsHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModsRoutingModule { }
