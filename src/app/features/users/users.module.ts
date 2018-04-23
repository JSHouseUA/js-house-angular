import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '', component: UsersComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UsersComponent
  ]
})
export class UsersModule {
}
