import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ApiModule} from './api/api.module';
import {Config} from './api/config';

const routes: Routes = [
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: '', loadChildren: './main/main.module#MainModule'},
  {path: '**', redirectTo: ''},
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes),
    ApiModule
  ],
  declarations: [],
  providers: [
    Config
  ]
})
export class CoreModule { }
