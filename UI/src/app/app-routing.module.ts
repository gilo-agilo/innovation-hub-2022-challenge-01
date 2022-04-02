import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictionComponent } from './shared/components/prediction/prediction.component';

const routes: Routes = [
  { path: '', component: PredictionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}