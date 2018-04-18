import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {SurveysComponent} from './surveys.component';
import {SurveyEditorComponent} from "./survey-editor/survey-editor.component";
import {ShortAnswerComponent} from "./survey-editor/short-answer/short-answer.component";
import {SurveyFactoryComponent} from './survey-editor/survey-factory/survey-factory.component';
import {FormGroupBuilderService} from './services/formgroup-builder.service';
import {DynamicContainer} from '../../../core/directives/dynamic-container';
import { RadioAnswerComponent } from './survey-editor/radio-answer/radio-answer.component';

const routes: Routes = [
  {path: '', component: SurveysComponent},
  {path: 'new-survey', component: SurveyEditorComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SurveysComponent,
    SurveyEditorComponent,
    ShortAnswerComponent,
    SurveyFactoryComponent,
    DynamicContainer,
    RadioAnswerComponent
  ],
  entryComponents: [
    ShortAnswerComponent,
    RadioAnswerComponent,
  ],
  providers:[
    FormGroupBuilderService
  ]
})
export class SurveysModule {
}
