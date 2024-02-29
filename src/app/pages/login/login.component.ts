import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
    MAT_FORM_FIELD_DEFAULT_OPTIONS,
    MatFormFieldModule,
} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatIcon,
        CommonModule,
        MatCardModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    providers: [
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { appearance: 'outline' },
        },
    ],
})

export class LoginComponent implements OnInit {

    hide: boolean = false;

    constructor(private fb: FormBuilder) {
    }
  
    ngOnInit() {
    }
  
    loginForm: FormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  
  
    onLogin() {
      if (!this.loginForm.valid) {
        return;
      }
      console.log(this.loginForm.value);
    }
}
