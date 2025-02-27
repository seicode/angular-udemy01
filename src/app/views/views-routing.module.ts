import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';


const routes: Routes = [
  {
    path: 'views', component: ViewsHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
