import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";

const routes: Routes = [
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: '', loadChildren: './main/main.module#MainModule'},
  {path: '**', redirectTo: ''},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class FeatureModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FeatureModule,
      providers : [
        // AuthGuard,
        // UserService
      ]
    }
  }
}
