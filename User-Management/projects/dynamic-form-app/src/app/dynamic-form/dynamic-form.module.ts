import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[DynamicFormComponent]
})
export class DynamicFormModule { }
