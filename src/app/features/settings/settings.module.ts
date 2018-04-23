import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from "./settings.component";
import {SharedModule} from '../../shared/shared.module';


const routes: Routes = [
    {
        path: '', component: SettingsComponent
    }
];

@NgModule({
  imports: [
      SharedModule,
      RouterModule.forChild(routes)
  ],
  declarations: [
      SettingsComponent
  ]
})
export class SettingsModule { }
