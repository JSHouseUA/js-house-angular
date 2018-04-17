import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MainComponent} from './main.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SurveysComponent} from './surveys/surveys.component';
import {EventsComponent} from './events/events.component';
import {SurveysModule} from './surveys/surveys.module';
import { SettingsComponent } from './settings/settings.component';
import {SettingsModule} from "./settings/settings.module";
import {MenuService} from "./main.services/menu.service";

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'users', loadChildren: './users/users.module#UsersModule'},
      {path: 'stats', loadChildren: './statistics/statistics.module#StatisticsModule'},
      {path: 'events', loadChildren: './events/events.module#EventsModule'},
      {path: 'surveys', loadChildren: './surveys/surveys.module#SurveysModule'},
      {path: 'settings', loadChildren: './settings/settings.module#SettingsModule'},

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
  ],
  providers: [
    MenuService
  ]
})
export class MainModule {
}
