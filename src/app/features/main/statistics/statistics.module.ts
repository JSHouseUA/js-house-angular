import { NgModule } from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {StatisticsComponent} from './statistics.component';
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
