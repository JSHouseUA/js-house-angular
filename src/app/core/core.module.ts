import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: '', loadChildren: './main/main.module#MainModule'},
  {path: '**', redirectTo: ''},
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class CoreModule { }
