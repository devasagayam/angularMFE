export type AccessModifier = 'EDITABLE' | 'READ_ONLY' | 'HIDDEN';
export type DataType = 
  | 'TEXT' 
  | 'NUMBER' 
  | 'DROPDOWN' 
  | 'BOOLEAN' 
  | 'DOC_UPLOAD' 
  | 'DATE' 
  | 'EMAIL'
  | 'PASSWORD'
  | 'TEXTAREA'
  | 'PHONE'
  | 'URL'
  | 'TIME'
  | 'DATETIME'
  | 'CURRENCY'
  | 'MULTI_SELECT'
  | 'RADIO'
  | 'RANGE'
  | 'COLOR'
  | 'IMAGE_UPLOAD'
  | 'RICH_TEXT'
  | 'AUTOCOMPLETE'
  | 'RATING'
  | 'SIGNATURE'
  | 'OTP'
  | 'LOCATION';

export interface DropdownOption {
  optionLabel: string;
  optionValue: any;
  disabled?: boolean;
  description?: string;
}

export interface FormFieldConfig {
  fieldName: string;
  accessModifier: AccessModifier;
  dataType: DataType;
  value?: any;
  options?: DropdownOption[];
  groupName: string;
  groupNumber: number;
  sortIndex: number;
  label?: string;
  placeholder?: string;
  validation?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: string;
    email?: boolean;
    url?: boolean;
    customValidator?: (value: any) => boolean;
    customMessage?: string;
    matchField?: string; 
    fileTypes?: string[];
    maxFileSize?: number; 
    latitude?: { min: number; max: number }; 
    longitude?: { min: number; max: number }; 
  };
  appearance?: {
    size?: 'small' | 'medium' | 'large';
    variant?: 'outlined' | 'filled' | 'standard';
    width?: string;
    height?: string;
    className?: string;
  };
  dependencies?: {
    showIf?: {
      field: string;
      value: any;
    };
    enableIf?: {
      field: string;
      value: any;
    };
    requiredIf?: {
      field: string;
      value: any;
    };
  };
  metadata?: {
    description?: string;
    helpText?: string;
    tooltip?: string;
    icon?: string;
    unit?: string; 
    format?: string; 
    locale?: string;
    timezone?: string;
    mask?: string; 
    autoComplete?: string; 
    defaultLatLng?: [number, number];
    zoomLevel?: number; 
  };
}

export interface FormGroup {
  name: string;
  number: number;
  fields: FormFieldConfig[];
  description?: string;
  collapsed?: boolean;
  conditional?: {
    showIf?: {
      field: string;
      value: any;
    };
  };
}