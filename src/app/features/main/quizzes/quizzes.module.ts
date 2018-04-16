import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {QuizzesComponent} from './quizzes.component';

const routes: Routes = [
  {
    path: '', component: QuizzesComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    QuizzesComponent
  ]
})
export class QuizzesModule {
}
