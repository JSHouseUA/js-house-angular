import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {MainComponent} from './main.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {EventsComponent} from './events/events.component';
import {QuizzesModule} from './quizzes/quizzes.module';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'users', loadChildren: './users/users.module#UsersModule'},
      {path: 'stats', loadChildren: './statistics/statistics.module#StatisticsModule'},
      {path: 'events', loadChildren: './events/events.module#EventsModule'},
      {path: 'quizzes', loadChildren: './quizzes/quizzes.module#QuizzesModule'},
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MainComponent,
    HomeComponent
  ]
})
export class MainModule {
}
