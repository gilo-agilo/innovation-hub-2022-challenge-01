import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PredictService } from './web-api/services/predict.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YearPickerComponent } from './shared/components/year-picker/year-picker.component';
import { SharedModule } from './shared/components/shared.module';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule,
    ComponentsModule
  ],
  providers: [HttpClient, PredictService, YearPickerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
