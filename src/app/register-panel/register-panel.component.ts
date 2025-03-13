import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';  

@Component({
  selector: 'app-register-panel',
  standalone: true, 
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.css'],
  imports: [ReactiveFormsModule]  
})
export class RegisterPanelComponent {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      terms: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      console.log('Formularz jest nieprawidłowy');
    }
  }
}
