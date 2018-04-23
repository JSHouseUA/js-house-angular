import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatisticsComponent} from './statistics.component';
import {SharedModule} from '../../shared/shared.module';
const routes: Routes = [
  {
    path: '', component: StatisticsComponent
  }
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StatisticsComponent
  ]
})
export class StatisticsModule { }
