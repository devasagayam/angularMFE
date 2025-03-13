import { Component, inject, Input, input, OnInit } from '@angular/core';
import { FormFieldConfig,FormGroup as IFormGroup } from '../../../shared/interfaces/form.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  standalone: false,
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
 @Input() fields:FormFieldConfig[] = []
  fb:FormBuilder = inject(FormBuilder);
  form:FormGroup = this.fb.group({});
  formGroups: IFormGroup[] = [];

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm():void{
    const groupedFields = this.fields.reduce((groups, field) => {
      const key = `${field.groupName}-${field.groupNumber}`;
      if (!groups[key]) {
        groups[key] = {
          name: field.groupName,
          number: field.groupNumber,
          fields: []
        };
      }
      groups[key].fields.push(field);
      return groups;
    }, {} as { [key: string]: IFormGroup });

    this.formGroups = Object.values(groupedFields)
      .sort((a, b) => a.number - b.number)
      .map(group => ({
        ...group,
        fields: group.fields.sort((a, b) => a.sortIndex - b.sortIndex)
      }));

      this.fields.forEach((field)=>{
        const control = this.fb.control({ value: field.value || '', disabled: field.accessModifier === 'READ_ONLY' });
        this.form.addControl(field.fieldName,control);
      })
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
