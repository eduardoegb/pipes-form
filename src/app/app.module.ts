import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertPipe } from './convert.pipe';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { MeasureFormComponent } from './measure-form/measure-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertPipe,
    PaymentFormComponent,
    MeasureFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
