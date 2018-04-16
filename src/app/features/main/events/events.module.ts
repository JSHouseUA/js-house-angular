import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from './events.component';

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
