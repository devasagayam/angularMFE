import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { USER_FACADE } from '../../../services/user-facade.provider';

@Component({
  selector: 'app-add-new-user',
  standalone: false,
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.scss'
})
export class AddNewUserComponent implements OnInit{
  fb = inject(FormBuilder);
  newUserForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  // constructor(@Inject(USER_FACADE) private userFacade: any) {}

  async ngOnInit() {
    
    // console.log('module',this.userFacade)
  }
  onSubmit(): void {
    console.log('submit')
  }

  onCancel(): void {
    console.log('cancel')
  }
}
