import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from '../../../shared/interfaces/form.interface';

@Component({
  selector: 'app-dynamic-field',
  standalone: false,
  templateUrl: './dynamic-field.component.html',
  styleUrl: './dynamic-field.component.scss'
})
export class DynamicFieldComponent {
  @Input() field!: FormFieldConfig;
  @Input() form!: FormGroup;

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.form.get(this.field.fieldName)?.setValue(file);
    }
  }
}
