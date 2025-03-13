import { Component } from '@angular/core';
import { FormFieldConfig } from './shared/interfaces/form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamic-form-app';
  formFields: FormFieldConfig[] = [
    {
      fieldName: 'firstName',
      accessModifier: 'EDITABLE',
      dataType: 'TEXT',
      value: 'Deva',
      groupName: 'Personal Information',
      groupNumber: 1,
      sortIndex: 1,
      label: 'First Name',
      placeholder: 'Enter your first name',
      validation: {
        required: true,
        minLength: 2
      }
    },
    {
      fieldName: 'lastName',
      accessModifier: 'EDITABLE',
      dataType: 'TEXT',
      value: '',
      groupName: 'Personal Information',
      groupNumber: 1,
      sortIndex: 2,
      label: 'Last Name',
      placeholder: 'Enter your last name',
      validation: {
        required: true,
        minLength: 2
      }
    },
    {
      fieldName: 'email',
      accessModifier: 'EDITABLE',
      dataType: 'EMAIL',
      value: '',
      groupName: 'Contact Details',
      groupNumber: 2,
      sortIndex: 1,
      label: 'Email Address',
      placeholder: 'Enter your email',
      validation: {
        required: true
      }
    },
    {
      fieldName: 'phoneNumber',
      accessModifier: 'EDITABLE',
      dataType: 'TEXT',
      value: '',
      groupName: 'Contact Details',
      groupNumber: 2,
      sortIndex: 2,
      label: 'Phone Number',
      placeholder: 'Enter your phone number'
    },
    {
      fieldName: 'birthDate',
      accessModifier: 'EDITABLE',
      dataType: 'DATE',
      value: '',
      groupName: 'Personal Information',
      groupNumber: 1,
      sortIndex: 3,
      label: 'Date of Birth',
      validation: {
        required: true
      }
    },
    {
      fieldName: 'department',
      accessModifier: 'EDITABLE',
      dataType: 'DROPDOWN',
      value: '',
      options: [
        { optionLabel: 'IT', optionValue: 'it' },
        { optionLabel: 'HR', optionValue: 'hr' },
        { optionLabel: 'Finance', optionValue: 'finance' },
        { optionLabel: 'Marketing', optionValue: 'marketing' }
      ],
      groupName: 'Employment Details',
      groupNumber: 3,
      sortIndex: 1,
      label: 'Department',
      validation: {
        required: true
      }
    },
    {
      fieldName: 'fullTime',
      accessModifier: 'EDITABLE',
      dataType: 'BOOLEAN',
      value: false,
      groupName: 'Employment Details',
      groupNumber: 3,
      sortIndex: 2,
      label: 'Full-time Employee'
    },
    {
      fieldName: 'resume',
      accessModifier: 'EDITABLE',
      dataType: 'DOC_UPLOAD',
      value: '',
      groupName: 'Documents',
      groupNumber: 4,
      sortIndex: 1,
      label: 'Resume',
      validation: {
        required: true
      }
    }
  ];
}
