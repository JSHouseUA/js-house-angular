import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MainComponent} from './main.component';
import {RouterModule, Routes} from '@angular/router';
import {MenuService} from './main.services/menu.service';


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', loadChildren: '../../features/feature.module#FeatureModule'},
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MainComponent
  ],
  providers: [
    MenuService
  ]
})
export class MainModule {
}
