import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren: './users/users.module#UsersModule'},
  {path: 'stats', loadChildren: './statistics/statistics.module#StatisticsModule'},
  {path: 'events', loadChildren: './events/events.module#EventsModule'},
  {path: 'surveys', loadChildren: './surveys/surveys.module#SurveysModule'},
  {path: 'settings', loadChildren: './settings/settings.module#SettingsModule'},
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class PrivateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PrivateModule,
      providers: [
        // AuthGuard,
        // UserService
      ]
    };
  }
}
