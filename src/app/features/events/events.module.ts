import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from './events.component';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '', component: EventsComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    EventsComponent
  ]
})
export class EventsModule {
}
