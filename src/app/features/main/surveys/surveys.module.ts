import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {SurveysComponent} from './surveys.component';
import {SurveyEditorComponent} from "./survey-editor/survey-editor.component";
import {ShortAnswerComponent} from "./survey-editor/short-answer/short-answer.component";

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
    ShortAnswerComponent
  ]
})
export class SurveysModule {
}
