import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.css']
})
export class RegisterPanelComponent {
  user = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.user.firstName || !this.user.lastName || !this.user.email || !this.user.password || !this.user.confirmPassword) {
      alert('Wszystkie pola są wymagane!');
      return;
    }

    if (this.user.password !== this.user.confirmPassword) {
      alert('Hasła nie są zgodne!');
      return;
    }

    this.authService.register(this.user).subscribe({
      next: () => {
        alert('Rejestracja udana!');
        this.router.navigate(['/reservation']); 
      },
      error: (err) => {
        alert('Błąd rejestracji: ' + err.error.message);
      }
    });
  }
}
